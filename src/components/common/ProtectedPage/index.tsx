'use client';

import { routes } from '@/config/routes';
import { useUser } from '@/hooks/auth';
import { Box, CircularProgress } from '@mui/joy';
import React from 'react';

type ProtectedPageProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export function ProtectedPage({ children, redirectTo = routes.auth }: ProtectedPageProps) {
  const { isAuthenticated, isReady } = useUser({ redirectTo });

  if (!isReady) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress size="lg" />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <Box padding={2}>{children}</Box>;
}
