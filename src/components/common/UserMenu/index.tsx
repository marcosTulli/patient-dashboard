'use client';
import React from 'react';
import { Box } from '@mui/material';
import { OpenUserMenu } from './components/OpenUserMenu';
import { UserMenuContainer } from './components/UserMenuContainer';
import UserMenuOptions from './components/UserMenuOptions';

const UserMenu: React.FC = () => {
  return (
    <Box>
      <OpenUserMenu />
      <UserMenuContainer>
        <UserMenuOptions />
      </UserMenuContainer>
    </Box>
  );
};

export default UserMenu;
