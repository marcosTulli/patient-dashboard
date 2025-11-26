'use client';

import { QueryClient } from '@tanstack/react-query';

interface MutationHandlerOptions {
  queryClient: QueryClient;
  queryKey: string[];
  toastId: string;
  successMessage: string;
  errorMessage: string;
}

export function mutationHandlers({
  queryClient,
  queryKey,
  toastId,
  successMessage,
  errorMessage,
}: MutationHandlerOptions) {
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey });
   console.log(successMessage, { toastId });
  };

  const onError = () => {
    queryClient.invalidateQueries({ queryKey });
    console.log(errorMessage, { toastId });
  };

  return { onSuccess, onError };
}
