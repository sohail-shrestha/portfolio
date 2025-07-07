import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
