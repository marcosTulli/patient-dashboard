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
  title: 'Patient Management',
  description: 'Administer patients',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'auto 1fr auto',
              minHeight: '100vh',
            }}
          >
            <NavigationMenu />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
