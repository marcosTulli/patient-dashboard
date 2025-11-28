import { useMutation } from '@tanstack/react-query';
import { loginService } from '@/services/auth/login';
import { type AuthResponse, type LoginRequest } from '@/models/auth';

export const useLogin = () => {
  const { data, mutateAsync, isPending, isError, error } = useMutation<
    AuthResponse,
    Error,
    LoginRequest
  >({
    mutationFn: loginService,
  });

  return {
    accessToken: data?.access_token,
    login: mutateAsync,
    isPending,
    isError,
    error,
  };
};
