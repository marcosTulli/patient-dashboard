'use client';

import * as React from 'react';
import { Modal, Sheet, Stack } from '@mui/joy';
import { useSideBar } from '@/hooks';
import NavList from '../Routes';

const Sidebar: React.FC = () => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();

  return (
    <Modal
      open={isSideBarOpen}
      onClose={toggleSideBar}
      sx={{ zIndex: 'modal' }}
    >
      <Sheet
        variant="solid"
        color="neutral"
        sx={{
          width: { xs: '80vw', sm: 280 },
          height: '100vh',
          p: 2,
          boxShadow: 'lg',
          bgcolor: 'background.level1',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Stack>
          <NavList />
        </Stack>
      </Sheet>
    </Modal>
  );
};

export default Sidebar;
