'use client';
import React from 'react';
import { Divider } from '@mui/material';
import { UserInfoCard } from './UserInfoCard';
import Logout from './Logout';
const UserMenuOptions: React.FC = () => {
  return (
    <>
      <UserInfoCard />
      <Divider sx={{ my: 1 }} />
      <Logout />
    </>
  );
};

export default UserMenuOptions;
