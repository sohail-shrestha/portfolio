import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import I18nProvider from '@/i18n/I18nProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://sohailshrestha.com.np';
const siteDescription =
  'Sohail Shrestha is a Senior Software Engineer from Nepal with 8+ years of experience building scalable full-stack web applications. Specializing in React, Node.js, TypeScript, Python, and cloud infrastructure. Available for hire — remote or relocation. Open to full-time roles and freelance contracts.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sohail Shrestha – Senior Software Engineer',
    template: '%s | Sohail Shrestha',
  },
  description: siteDescription,
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
    ],
    shortcut: '/favicon-16x16.svg',
    apple: '/favicon.svg',
  },
  keywords: [
    'Sohail Shrestha',
    'Sohail',
    'Software Engineer Nepal',
    'Nepali Software Engineer',
    'Software Engineering Nepal',
    'Senior Software Engineer Nepal',
    'Full Stack Developer Nepal',
    'Hire Software Engineer',
    'Software Engineer for Hire',
    'Full Stack Developer for Hire',
    'Remote Software Engineer Nepal',
    'React Developer Nepal',
    'Node.js Developer Nepal',
    'JavaScript Developer',
    'TypeScript Developer',
    'Python Developer',
    'Web Developer Nepal',
    'AWS Developer',
    'React',
    'Node.js',
    'TypeScript',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Sohail Shrestha' }],
  openGraph: {
    type: 'profile',
    url: siteUrl,
    title: 'Sohail Shrestha – Senior Software Engineer | Nepal',
    description: siteDescription,
    siteName: 'Sohail Shrestha Portfolio',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sohail Shrestha – Senior Software Engineer | Nepal',
    description: siteDescription,
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('portfolio-locale');if(['en','ne','ja','es','de','zh','uk','fr','ru'].indexOf(l)>-1)document.documentElement.lang=l;}catch(e){}})();`,
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://sohailshrestha.com.np/#person',
                  name: 'Sohail Shrestha',
                  alternateName: 'Sohail',
                  url: 'https://sohailshrestha.com.np',
                  jobTitle: 'Senior Software Engineer',
                  description:
                    'Senior Software Engineer from Nepal with 8+ years of experience building scalable full-stack web applications.',
                  nationality: { '@type': 'Country', name: 'Nepal' },
                  knowsAbout: [
                    'React',
                    'Node.js',
                    'TypeScript',
                    'Python',
                    'AWS',
                    'Docker',
                    'Full Stack Development',
                  ],
                  email: 'sohailshrestha2@gmail.com',
                  sameAs: [
                    'https://github.com/sohail-shrestha',
                    'https://www.linkedin.com/in/sohail-shrestha-84a04a143/',
                  ],
                  alumniOf: {
                    '@type': 'CollegeOrUniversity',
                    name: 'Sharda University',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://sohailshrestha.com.np/#website',
                  url: 'https://sohailshrestha.com.np',
                  name: 'Sohail Shrestha – Senior Software Engineer Portfolio',
                  author: { '@id': 'https://sohailshrestha.com.np/#person' },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
