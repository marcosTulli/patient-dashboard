'use client';

import { QueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';

interface MutationHandlerOptions {
  queryClient: QueryClient;
  queryKey: string[];
  successMessage: string;
  errorMessage: string;
}

export function mutationHandlers({
  queryClient,
  queryKey,
  successMessage,
  errorMessage,
}: MutationHandlerOptions) {
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey });
    enqueueSnackbar(successMessage ?? 'Success', { variant: 'success' });
  };

  const onError = () => {
    queryClient.invalidateQueries({ queryKey });
    enqueueSnackbar(errorMessage ?? 'Something went wrong. Please try again.', {
      variant: 'error',
    });
  };

  return { onSuccess, onError };
}
