import { useMutation } from '@tanstack/react-query';
import { signupService } from '@/services/auth';
import { type AuthResponse, type SignupRequest } from '@/models/auth';

export const useSignup = () => {
  const { data, mutateAsync, isPending, isError, error } = useMutation<
    AuthResponse,
    Error,
    SignupRequest
  >({
    mutationFn: signupService,
  });

  return {
    accessToken: data?.access_token,
    signup: mutateAsync,
    isPending,
    isError,
    error,
  };
};
