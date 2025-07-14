import { create } from 'zustand';

type TokenState = {
  authToken: string | null;
  setAuthToken: (authToken: string) => void;
  clearAuthToken: () => void;
};

export const useAuthTokenStore = create<TokenState>((set) => ({
  authToken:
    typeof window !== 'undefined' ? localStorage.getItem('authToken') : null,

  setAuthToken: (authToken) => {
    localStorage.setItem('authToken', authToken);
    set({ authToken });
  },

  clearAuthToken: () => {
    localStorage.removeItem('authToken');
    set({ authToken: null });
  },
}));
