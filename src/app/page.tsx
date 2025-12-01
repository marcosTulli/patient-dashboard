'use client';
import { ProtectedPage } from '@/components/common/ProtectedPage';
import { routes } from '@/config/routes';
import { Box } from '@mui/material';
import {
  Activity,
  Features,
  GettingStarted,
  Hero,
  HomeNavigation,
  Sessions,
  Stats,
  Tips,
} from '@components/pages/home/components';

export default function Home() {
  return (
    <ProtectedPage redirectTo={routes.auth}>
      <Hero />
      <HomeNavigation />
      <Stats />
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', mb: 5 }}>
        <Activity />
        <GettingStarted />
      </Box>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        <Sessions />
        <Tips />
        <Features />
      </Box>
    </ProtectedPage>
  );
}
