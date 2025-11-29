import { create } from 'zustand';

interface UserMenuStore {
  isOpenUserMenu: boolean;
  anchorEl: HTMLElement | null;

  openUserMenu: (anchor: HTMLElement) => void;
  closeUserMenu: () => void;
  toggleUserMenu: (anchor?: HTMLElement) => void;
}

export const userMenuStore = create<UserMenuStore>((set, get) => ({
  isOpenUserMenu: false,
  anchorEl: null,

  openUserMenu: (anchor) => {
    set({ isOpenUserMenu: true, anchorEl: anchor });
  },

  closeUserMenu: () => {
    set({ isOpenUserMenu: false, anchorEl: null });
  },

  toggleUserMenu: (anchor) => {
    const current = get().isOpenUserMenu;
    set({
      isOpenUserMenu: !current,
      anchorEl: current ? null : (anchor ?? null),
    });
  },
}));
