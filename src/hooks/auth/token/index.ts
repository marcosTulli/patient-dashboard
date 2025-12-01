import { useAuthTokenStore } from '@/store/auth-token';

export function useAuthToken() {
  const { authToken, clearAuthToken, setAuthToken } = useAuthTokenStore();

  return {
    setAuthToken,
    clearAuthToken,
    authToken,
  };
}
