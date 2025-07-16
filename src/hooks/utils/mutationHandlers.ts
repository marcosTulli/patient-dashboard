'use client';

import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

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
    toast.success(successMessage, { toastId });
  };

  const onError = () => {
    queryClient.invalidateQueries({ queryKey });
    toast.error(errorMessage, { toastId });
  };

  return { onSuccess, onError };
}
