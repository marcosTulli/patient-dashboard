'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider, MutationCache } from '@tanstack/react-query';
import UIProvider from './UIProvider';
import ErrorProvider from './ErrorProvider';
import { ToastProvider } from './ToastProvider';
import { useAppTheme } from '@/hooks/useApppTheme';
import { CssVarsProvider } from './CssVars';
import { ThemeProvider } from '@mui/material';

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useAppTheme();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000,
          },
        },
        mutationCache: new MutationCache({
          onError: (error) => {
            console.error('Mutation error:', error);
          },
        }),
      }),
  );

  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <UIProvider>
            <CssVarsProvider>
              <ErrorProvider>{children}</ErrorProvider>
            </CssVarsProvider>
          </UIProvider>
        </QueryClientProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
