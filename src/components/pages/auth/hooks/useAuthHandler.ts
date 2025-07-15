'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import useAuthToken from '@/hooks/auth/token';
import { useLogin, useSignup } from '@/hooks/auth/';
import React from 'react';
import { LoginRequest, SignupRequest } from '@/models/auth';
import { routes } from '@/config/routes';
import { AccessTypes } from '../models';

export function useAuthHandler(mode: 'login' | 'signup') {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || routes.home;
  const { setAuthToken } = useAuthToken();

  const {
    accessToken: loginToken,
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
    if (mode === AccessTypes.login) {
      await login(data as LoginRequest);
    } else {
      await signup(data as SignupRequest);
    }
  };

  React.useEffect(() => {
    const token = mode === AccessTypes.login ? loginToken : signupToken;

    if (token) {
      setAuthToken(token);
      router.replace(redirectTo);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginToken, signupToken, mode, redirectTo, router]);

  const isLoading =
    mode === AccessTypes.login ? isLoginPending : isSignupPending;
  const error = mode === AccessTypes.login ? loginError : signupError;

  return { handleSubmit, isLoading, error };
}
