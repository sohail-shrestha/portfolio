import {
  aboutMe,
  education,
  experiences,
  projects,
  skills,
} from '@/data/portfolio';

function buildSystemPrompt(): string {
  const experienceText = experiences
    .map(
      (exp) =>
        `### ${exp.title} at ${exp.company} (${exp.startDate} – ${exp.endDate})\n` +
        `Location: ${exp.location}\n` +
        exp.description.map((d) => `- ${d}`).join('\n') +
        `\nTechnologies: ${exp.technologies.join(', ')}`,
    )
    .join('\n\n');

  const skillsText = skills
    .map((s) => `**${s.category}:** ${s.skills.join(', ')}`)
    .join('\n');

  const projectsText = projects
    .map(
      (p) =>
        `### ${p.title}${p.discontinued ? ' (discontinued)' : ''}\n` +
        `${p.description}\n` +
        `Technologies: ${p.technologies.join(', ')}` +
        (p.liveUrl ? `\nLive: ${p.liveUrl}` : ''),
    )
    .join('\n\n');

  const educationText = education
    .map(
      (e) =>
        `${e.degree} – ${e.institution}, ${e.location} (${e.graduationYear})` +
        (e.gpa ? ` | GPA: ${e.gpa}` : ''),
    )
    .join('\n');

  return `You are an AI assistant for ${aboutMe.name}'s portfolio website. Answer questions about his skills, experience, and projects based on the information below. Be concise and helpful.

## About
${aboutMe.description}

## Experience
${experienceText}

## Skills
${skillsText}

## Projects
${projectsText}

## Education
${educationText}

Keep responses brief (2-4 sentences unless detail is requested). If asked something not covered by the data above, say you don't have that info but suggest contacting Sohail directly at ${aboutMe.email}.`;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.message) {
    return new Response(JSON.stringify({ error: 'message is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'OpenRouter API key not configured' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const { message, history = [] } = body as {
    message: string;
    history: { role: 'user' | 'assistant'; content: string }[];
  };

  const messages = [
    { role: 'system', content: buildSystemPrompt() },
    ...history,
    { role: 'user', content: message },
  ];

  try {
    const upstream = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://sohailshrestha.dev',
          'X-Title': 'Sohail Shrestha Portfolio',
        },
        body: JSON.stringify({
          model: 'nvidia/nemotron-3.5-lightning:free',
          messages,
          stream: true,
        }),
      },
    );

    if (!upstream.ok) {
      const text = await upstream.text();
      return new Response(JSON.stringify({ error: text }), {
        status: upstream.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    (async () => {
      const reader = upstream.body!.getReader();
      const decoder = new TextDecoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n').filter((l) => l.startsWith('data: '));

          for (const line of lines) {
            const data = line.slice(6).trim();
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              const delta = parsed.choices?.[0]?.delta?.content;
              if (delta) {
                await writer.write(encoder.encode(delta));
              }
            } catch {
              // skip malformed SSE lines
            }
          }
        }
      } finally {
        await writer.close();
      }
    })();

    return new Response(readable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
