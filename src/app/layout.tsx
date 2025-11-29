import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/providers';
import { type Metadata } from 'next';
import NavigationMenu from '@/components/common/Navigation/Menu';
import Footer from '@/components/common/Footer';
import React from 'react';
import { Box } from '@mui/material';

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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              minHeight: '100vh',
              overflowX: 'hidden',
              position: 'relative',
            }}
          >
            <NavigationMenu />
            {children}
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
