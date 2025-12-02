'use client';

import React from 'react';
import { Stack } from '@mui/material';
import useRoutesList from '@/hooks/useRoutesList';
import NavLinkButton from '../NavLinkButton';

interface NavListProps {
  variant?: 'navbar' | 'sidebar';
}

const NavList: React.FC<NavListProps> = ({ variant = 'navbar' }) => {
  const { routesList } = useRoutesList();
  const isSidebar = variant === 'sidebar';

  return (
    <Stack
      direction={isSidebar ? 'column' : 'row'}
      alignItems="flex-start"
      spacing={isSidebar ? 0 : 1}
      sx={{ width: '100%' }}
    >
      {routesList.map((route) => {
        return (
          <NavLinkButton
            key={route.label}
            Icon={route.Icon}
            path={route.path}
            label={route.label}
            variant={variant}
          />
        );
      })}
    </Stack>
  );
};

export default NavList;
