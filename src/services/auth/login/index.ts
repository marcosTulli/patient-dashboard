import { AuthResponse } from '@/models/auth/auth-response';
import { LoginRequest } from '@/models/auth/login';
import HttpClientInstance from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const login = (body: LoginRequest) =>
  HttpClientInstance.post<AuthResponse>({
    location: `${baseUrl}/auth/login`,
    body,
  });
