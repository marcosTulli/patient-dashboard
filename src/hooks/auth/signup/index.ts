import { useMutation } from '@tanstack/react-query';
import { signup } from '@/services/auth';
import { AuthResponse, SignupRequest } from '@/models/auth';

export const useSignup = () => {
  const { data, mutateAsync, isPending, isError, error } = useMutation<
    AuthResponse,
    Error,
    SignupRequest
  >({
    mutationFn: signup,
  });

  return {
    accessToken: data?.access_token,
    signup: mutateAsync,
    isPending,
    isError,
    error,
  };
};