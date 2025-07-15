// components/common/Navigation/Menu.tsx
'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Box, Sheet, Stack} from '@mui/joy';
import { routes } from '@/config/routes';
import OpenSideBarButton from './OpenSidebarButton';
import NavList from '../Routes';

const Navbar: React.FC = () => {
  const pathName = usePathname();
  const isHome = pathName === routes.home;

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
          justifyContent: { xs: 'flex-end', sm: 'space-between' },
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
        <OpenSideBarButton />
      </Stack>
    </Sheet>
  );
};

export default Navbar;
