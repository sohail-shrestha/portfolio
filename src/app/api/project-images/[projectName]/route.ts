import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ projectName: string }> }
) {
  const { projectName } = await params;

  const dir = path.join(process.cwd(), 'public', 'images', 'project', projectName);

  if (!fs.existsSync(dir)) {
    return NextResponse.json({ images: [] });
  }

  const files = fs.readdirSync(dir);
  const images = files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/images/project/${projectName}/${file}`);

  return NextResponse.json({ images });
}
