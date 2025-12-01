'use client';

import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useSideBar } from '@hooks/index';
import { useUser } from '@/hooks/auth';
import { IconButton } from '@mui/material';

const OpenSideBarButton: React.FC = () => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const { user } = useUser();

  return (
    !isSideBarOpen &&
    user?.isDefined && (
      <IconButton
        aria-label="open drawer"
        onClick={toggleSideBar}
        sx={{
          ml: 'auto',
          display: { sm: 'none' },
        }}
      >
        <MenuIcon />
      </IconButton>
    )
  );
};

export default OpenSideBarButton;
