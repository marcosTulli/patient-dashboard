'use client';
import { ProtectedPage } from '@/components/common/ProtectedPage';
import { routes } from '@/config/routes';
import { Box } from '@mui/material';
import {
  Activity,
  DailyTasks,
  Hero,
  HomeNavigation,
  Stats,
  Articles,
  Apointments,
} from '@components/pages/home/components';

export default function Home() {
  return (
    <ProtectedPage redirectTo={routes.auth}>
      <Hero />
      <HomeNavigation />
      <Stats />
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', mb: 5 }}>
        <Activity />
        <DailyTasks />
      </Box>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        <Apointments />
        <Articles />
      </Box>
    </ProtectedPage>
  );
}
