import { useMutation } from '@tanstack/react-query';
import { login } from '@/services/auth/login';
import { LoginRequest } from '@/models/auth/login';
import { AuthResponse } from '@/models/auth/auth-response';

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