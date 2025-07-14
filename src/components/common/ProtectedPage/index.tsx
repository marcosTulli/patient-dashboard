'use client';

import { routes } from '@/config/routes';
import { useUser } from '@/hooks/auth';
import { Box } from '@mui/joy';
import React from 'react';

type ProtectedPageProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export function ProtectedPage({
  children,
  redirectTo = routes.auth,
}: ProtectedPageProps) {
  const { isAuthenticated, isReady } = useUser({ redirectTo });

  if (!isReady) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <Box padding={2}>{children}</Box>;
}
