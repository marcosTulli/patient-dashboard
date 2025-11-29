'use  client';
import React from 'react';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useUserMenu } from '../hooks/useUserMenu';

export const OpenUserMenu: React.FC = () => {
  const { open, handleOpen } = useUserMenu();

  return (
    <IconButton
      onClick={handleOpen}
      size="large"
      edge="end"
      aria-label="user menu"
      aria-controls={open ? 'user-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      sx={{ color: 'text.primary' }}
    >
      <AccountCircleIcon fontSize="large" />
    </IconButton>
  );
};
