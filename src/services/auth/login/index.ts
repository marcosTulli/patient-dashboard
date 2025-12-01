import { env } from '@/config/env';
import { type AuthResponse } from '@/models/auth/auth-response';
import { type LoginRequest } from '@/models/auth/login';
import { HttpClientInstance } from '@/services/utils/httpClient';

export const loginService = (body: LoginRequest) =>
  HttpClientInstance.post<AuthResponse>({
    location: `${env.patientsApiUrl}/auth/login`,
    body,
  });
