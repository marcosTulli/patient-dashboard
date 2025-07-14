'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import useAuthToken from '@/hooks/auth/token';
import { useLogin, useSignup } from '@/hooks/auth/';
import React from 'react';
import { LoginRequest, SignupRequest } from '@/models/auth';
import { routes } from '@/config/routes';

export function useAuthHandler(mode: 'login' | 'signup') {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || routes.home;
  const { setAuthToken } = useAuthToken();

  const {
    accessToken,
    login,
    isPending: isLoginPending,
    error: loginError,
  } = useLogin();

  const {
    accessToken: signupToken,
    signup,
    isPending: isSignupPending,
    error: signupError,
  } = useSignup();

  const handleSubmit = async (data: LoginRequest | SignupRequest) => {
    if (mode === 'login') {
      await login(data as LoginRequest);
    } else {
      await signup(data as SignupRequest);
    }
  };

  React.useEffect(() => {
    const token = mode === 'login' ? accessToken : signupToken;
    if (token) {
      setAuthToken(token);
      router.replace(redirectTo);
    }
  }, [accessToken, signupToken, mode, redirectTo, setAuthToken, router]);

  const isLoading = mode === 'login' ? isLoginPending : isSignupPending;
  const error = mode === 'login' ? loginError : signupError;

  return { handleSubmit, isLoading, error };
}
