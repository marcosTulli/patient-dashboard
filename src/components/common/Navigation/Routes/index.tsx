'use client';

import React from 'react';
import { Button, Typography } from '@mui/material';
import { useSideBar } from '@/hooks';
import useRoutesList from '@/hooks/useRoutesList';
import { usePathname } from 'next/navigation';

const NavList: React.FC = () => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const { routesList } = useRoutesList();
  const pathName = usePathname();

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
            onClick={handleClick}
            sx={{
              color: 'text.secondary',
              bgcolor: pathName === route.path ? 'primary.main' : 'transparent',
            }}
          >
            <Typography variant="body2">{route.label}</Typography>
          </Button>
        );
      })}
    </>
  );
};

export default NavList;
