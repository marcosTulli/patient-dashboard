'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Box, Sheet, Stack, Button } from '@mui/joy';
import { routes } from '@/config/routes';
import OpenSideBarButton from './OpenSidebarButton';
import NavList from '../Routes';
import { useAuthTokenStore } from '@/store/auth-token';
import { useUser } from '@/hooks/auth';

const Navbar: React.FC = () => {
  const pathName = usePathname();
  const router = useRouter();
  const isHome = pathName === routes.home;
  const { user } = useUser();

        
        

  const { clearAuthToken } = useAuthTokenStore();

  const handleLogout = () => {
    clearAuthToken();
    router.replace(routes.auth);
  };
  
  if (!user?.isDefined) {
    return null;
  }

  return (
    <Sheet
      component="nav"
      variant="plain"
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
          {user?.isDefined && (
            <Button
              size="sm"
              color="neutral"
              variant="plain"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </Box>
      </Stack>
    </Sheet>
  );
};

export default Navbar;
