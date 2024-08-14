import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const root = process.env.NODE_ENV === 'production' 
    ? 'https://yourwebsite.com' // change with your website
    : 'http://localhost:3000';

export const metadata: Metadata = {
  alternates: {
    types: {
      'application/rss+xml': `${root}/rss.xml`,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
