'use client';

import * as React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { useUser } from '@/hooks/auth';
import { Box } from '@mui/joy';

const NavigationMenu: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
    </Box>
  );
};

export default NavigationMenu;
