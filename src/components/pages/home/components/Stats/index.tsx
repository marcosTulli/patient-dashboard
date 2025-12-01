'use client';
import { Box, Typography } from '@mui/material';
import { StatCard } from './StatCard';
import { useStats } from '../../hooks/useStats';

export function Stats() {
  const { statsConfig } = useStats();

  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h6" gutterBottom>
        Overview
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        {statsConfig.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </Box>
    </Box>
  );
}
