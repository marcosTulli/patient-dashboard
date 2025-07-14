'use client';

import React from 'react';
import { IconButton, Typography } from '@mui/joy';
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
          <IconButton
            key={route.label}
            variant="plain"
            color="neutral"
            onClick={handleClick}
            sx={{ color: 'neutral.300' }}
          >
            <Typography level="body-sm">{route.label}</Typography>
          </IconButton>
        );
      })}
    </>
  );
};

export default NavList;
