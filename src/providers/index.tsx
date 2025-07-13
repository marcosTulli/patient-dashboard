'use client';

import React from 'react';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssVarsProvider as JoyThemeProvider } from '@mui/joy/styles'; // Joy UI provider

import useTheme from '@/hooks/useTheme';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache(),
});

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={theme}>
        <JoyThemeProvider>
          <SkeletonTheme baseColor="#494949" highlightColor="#505050">
            {children}
          </SkeletonTheme>
        </JoyThemeProvider>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
}
