'use client';

import { useUser } from '@/hooks/auth';
import React from 'react';

type ProtectedPageProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export function ProtectedPage({
  children,
  redirectTo = '/auth',
}: ProtectedPageProps) {
  const { isAuthenticated, isReady } = useUser({ redirectTo });

  if (!isReady) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
