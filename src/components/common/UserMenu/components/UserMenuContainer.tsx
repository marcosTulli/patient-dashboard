'use client';
import React from 'react';
import { Menu } from '@mui/material';
import { useUserMenu } from '../hooks/useUserMenu';

export const UserMenuContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { open, anchorEl, handleClose } = useUserMenu();

  return (
    <Menu
      id="user-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      slotProps={{
        paper: {
          sx: {
            minWidth: 250,
          },
        },
      }}
    >
      {children}
    </Menu>
  );
};
