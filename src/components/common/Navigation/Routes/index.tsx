'use client';

import React from 'react';
import { Button, Typography } from '@mui/material';
import { useSideBar } from '@/hooks';
import useRoutesList from '@/hooks/useRoutesList';

const NavList: React.FC = () => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const { routesList } = useRoutesList();

  return (
    <>
      {routesList.map((route) => {
        const handleClick = () => {
          if (isSideBarOpen) toggleSideBar();
          route.onClick();
        };

        return (
          <Button
            key={route.label}
            variant="text"
            color="inherit"
            onClick={handleClick}
            sx={{ color: 'text.secondary' }}
          >
            <Typography variant="body2">{route.label}</Typography>
          </Button>
        );
      })}
    </>
  );
};

export default NavList;
