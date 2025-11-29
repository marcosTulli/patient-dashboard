'use client';
import type React from 'react';
import { userMenuStore } from '../userMenuStore';
import { useAuthTokenStore } from '@store/auth-token';
import { undefinedUser, useUserStore } from '@store/user';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes';

export function useUserMenu() {
  const { anchorEl, isOpenUserMenu, openUserMenu, closeUserMenu } = userMenuStore();
  const { clearAuthToken } = useAuthTokenStore();
  const { setUser } = useUserStore();
  const router = useRouter();

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    openUserMenu(event.currentTarget);
  };

  const handleClose = () => {
    closeUserMenu();
  };

  const handleLogout = () => {
    handleClose();
    clearAuthToken();
    setUser({ user: undefinedUser });
    router.replace(routes.auth);
  };

  return {
    open,
    anchorEl,
    isOpenUserMenu,
    handleOpen,
    handleLogout,
    handleClose,
  };
}
