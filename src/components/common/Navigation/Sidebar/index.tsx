'use client';

import * as React from 'react';
import Drawer from '@mui/joy/Drawer';
import { useSideBar } from '@/hooks';
import NavList from '../Routes';
import { Stack } from '@mui/joy';

interface Props {
  window?: () => Window;
}

const Sidebar: React.FC<Props> = () => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();

  return (
    <Drawer
      open={isSideBarOpen}
      onClose={toggleSideBar}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '80vw', sm: 'auto' },
          boxSizing: 'border-box',
          bgcolor: 'background.level1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        },
      }}
    >
      <Stack>
        <NavList />
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
