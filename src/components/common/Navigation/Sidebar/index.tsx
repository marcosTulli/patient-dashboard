'use client';

import * as React from 'react';
import { Drawer, Paper, Stack } from '@mui/material';
import { useSideBar } from '@/hooks';
import NavList from '../Routes';

const Sidebar: React.FC = () => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();

  return (
    <Drawer open={isSideBarOpen} onClose={toggleSideBar}>
      <Paper
        elevation={0}
        sx={{
          width: { xs: '80vw', sm: 280 },
          height: '100vh',
          p: 2,
          boxShadow: 4,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Stack alignItems="flex-start" sx={{ width: '100%' }}>
          <NavList variant="sidebar" />
        </Stack>
      </Paper>
    </Drawer>
  );
};

export default Sidebar;
