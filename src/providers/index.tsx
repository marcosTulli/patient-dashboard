'use client';

import React, { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  MutationCache,
} from '@tanstack/react-query';
import { CssVarsProvider as JoyThemeProvider } from '@mui/joy/styles';
import 'react-toastify/dist/ReactToastify.css';
import useTheme from '@/hooks/useTheme';
class GlobalErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
    fallback: React.ReactNode;
  },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Global Error Boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 2. Query Error Boundary (for React Query errors)
const QueryErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalErrorBoundary
      fallback={
        <div className="p-4 text-red-500">
          <h2>Something went wrong!</h2>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
          >
            Reload Page
          </button>
        </div>
      }
    >
      {children}
    </GlobalErrorBoundary>
  );
};

export function Providers({ children }: { children: React.ReactNode }) {
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

  const theme = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <JoyThemeProvider theme={theme} defaultColorScheme="dark">
        <GlobalErrorBoundary
          fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="text-center p-8">
                <h1 className="text-2xl font-bold mb-4">Critical Error</h1>
                <p className="mb-6">
                  Please refresh the page or try again later
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Reload Application
                </button>
              </div>
            </div>
          }
        >
          <QueryErrorBoundary>{children}</QueryErrorBoundary>
        </GlobalErrorBoundary>
      </JoyThemeProvider>
    </QueryClientProvider>
  );
}
