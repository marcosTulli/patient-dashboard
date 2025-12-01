import { env } from '@config/env';
import { type AuthResponse } from '@models/auth/auth-response';
import { type SignupRequest } from '@models/auth/signup';
import { HttpClientInstance } from '@services/utils/httpClient';

export const signupService = (body: SignupRequest) =>
  HttpClientInstance.post<AuthResponse>({
    location: `${env.patientsApiUrl}/auth/signup`,
    body,
  });
