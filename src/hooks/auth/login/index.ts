import { useMutation } from '@tanstack/react-query';
import { login } from '@/services/auth/login';
import { AuthResponse, LoginRequest } from '@/models/auth';

export const useLogin = () => {
  const { data, mutateAsync, isPending, isError, error } = useMutation<
    AuthResponse,
    Error,
    LoginRequest
  >({
    mutationFn: login,
  });

  return {
    accessToken: data?.access_token,
    login: mutateAsync,
    isPending,
    isError,
    error,
  };
};