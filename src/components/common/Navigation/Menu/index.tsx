'use client';

import * as React from 'react';
import Box from '@mui/joy/Box';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const NavigationMenu: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
    </Box>
  );
};

export default NavigationMenu;
