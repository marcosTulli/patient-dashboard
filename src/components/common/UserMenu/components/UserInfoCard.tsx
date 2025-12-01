'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useUser } from '@/hooks/auth';

export const UserInfoCard: React.FC = () => {
  const { user } = useUser();

  return (
    <Box sx={{ px: 2, py: 1 }}>
      <Typography variant="body2" color="text.secondary" noWrap>
        Welcome! {user?.email}
      </Typography>
    </Box>
  );
};
