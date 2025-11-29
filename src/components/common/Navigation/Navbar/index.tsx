'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Box, Paper, Stack } from '@mui/material';
import { routes } from '@/config/routes';
import OpenSideBarButton from './OpenSidebarButton';
import NavList from '../Routes';
import { useUser } from '@/hooks/auth';
import UserMenu from '../../UserMenu';

const Navbar: React.FC = () => {
  const pathName = usePathname();
  const isHome = pathName === routes.home;
  const { user } = useUser();

  if (!user?.isDefined) {
    return null;
  }

  return (
    <Paper
      component="nav"
      elevation={0}
      sx={{
        width: '100%',
        px: 2,
        py: 1,
        display: 'flex',
        alignItems: {
          xs: 'flex-end',
          sm: isHome ? 'center' : 'flex-start',
        },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: '100%',
          position: { xs: 'static', sm: 'relative' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexGrow: 1,
            gap: '1rem',
            justifyContent: 'flex-start',
          }}
        >
          <NavList />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <OpenSideBarButton />
          <UserMenu />
        </Box>
      </Stack>
    </Paper>
  );
};

export default Navbar;
