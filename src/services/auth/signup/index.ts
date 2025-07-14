import { AuthResponse } from '@/models/auth/auth-response';
import { SignupRequest } from '@/models/auth/signup';
import HttpClientInstance from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_AUTH_API_URL || '';

export const signup = (body: SignupRequest) =>
  HttpClientInstance.post<AuthResponse>({
    location: `${baseUrl}/auth/signup`,
    body,
  });
