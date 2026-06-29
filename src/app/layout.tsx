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

export const metadata: Metadata = {
  title: 'Sohail Shrestha - Senior Software Engineer',
  description: 'Portfolio of Sohail Shrestha, a Senior Software Engineer specializing in full-stack development, React, Node.js, and cloud technologies.',
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
  keywords: ['Sohail Shrestha', 'Software Engineer', 'Full Stack Developer', 'React', 'Node.js', 'TypeScript'],
  authors: [{ name: 'Sohail Shrestha' }],
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
