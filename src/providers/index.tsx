'use client';

import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  MutationCache,
} from '@tanstack/react-query';
import UIProvider from './UIProvider';
import ErrorProvider from './ErrorProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <ErrorProvider>{children}</ErrorProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover={false}
        />
      </UIProvider>
    </QueryClientProvider>
  );
}
