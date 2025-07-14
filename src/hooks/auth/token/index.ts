import { useAuthTokenStore } from '@/store/auth-token';

export default function useAuthToken() {
  const { authToken, clearAuthToken, setAuthToken } = useAuthTokenStore();

  return {
    setAuthToken,
    clearAuthToken,
    authToken,
  };
}
