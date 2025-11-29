import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/providers';
import { type Metadata } from 'next';
import NavigationMenu from '@/components/common/Navigation/Menu';
import Footer from '@/components/common/Footer';
import React from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Patients Dashboard',
  description: 'Administer patients',
};

// Script that runs before React to set theme and avoid flash
const themeScript = `
  (function() {
    function getTheme() {
      const stored = localStorage.getItem('selectedTheme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    const theme = getTheme();
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavigationMenu />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
