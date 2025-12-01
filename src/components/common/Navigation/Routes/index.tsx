'use client';

import React from 'react';
import { Stack } from '@mui/material';
import { useSideBar } from '@/hooks';
import useRoutesList from '@/hooks/useRoutesList';
import { usePathname } from 'next/navigation';
import NavLinkButton from '../NavLinkButton';

interface NavListProps {
  variant?: 'navbar' | 'sidebar';
}

const NavList: React.FC<NavListProps> = ({ variant = 'navbar' }) => {
  const { isSideBarOpen, toggleSideBar } = useSideBar();
  const { routesList } = useRoutesList();
  const pathName = usePathname();

  const isSidebar = variant === 'sidebar';

  return (
    <Stack
      direction={isSidebar ? 'column' : 'row'}
      alignItems="flex-start"
      spacing={isSidebar ? 0 : 1}
      sx={{ width: '100%' }}
    >
      {routesList.map((route) => {
        const handleClick = () => {
          if (isSideBarOpen) toggleSideBar();
          route.onClick();
        };

        return (
          <NavLinkButton
            key={route.label}
            Icon={route.Icon}
            handleClick={handleClick}
            isPath={pathName === route.path}
            label={route.label}
            variant={variant}
          />
        );
      })}
    </Stack>
  );
};

export default NavList;
