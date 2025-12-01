import { create } from 'zustand';
import { type User, type UserState } from '@/models';

export const undefinedUser: User = {
  id: '',
  email: '',
  role: '',
  isDefined: false,
  isAuthorized: false,
};

export const useUserStore = create<UserState>((set) => ({
  storedUser: undefinedUser,
  setUser: ({ user }) => {
    set({ storedUser: user });
  },

  clearUser: () => {
    set({ storedUser: null });
  },
}));
