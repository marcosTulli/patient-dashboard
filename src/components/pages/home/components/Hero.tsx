'use client';
import { useUser } from '@/hooks/auth';
import { Box, Typography } from '@mui/material';

export function Hero() {
  const { user } = useUser();

  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome back, {user?.email?.split('@')[0]}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
        Manage your patients and session notes in one place. Track progress, document sessions, and
        keep all your clinical data organized and accessible.
      </Typography>
    </Box>
  );
}
