'use client';
import { Typography, Paper, Skeleton } from '@mui/material';

interface StatCardProps {
  isLoading: boolean;
  value: string;
  label: string;
}
export function StatCard({ isLoading, value, label }: StatCardProps) {
  return (
    <Paper sx={{ p: 3, flex: '1 1 180px', textAlign: 'center' }}>
      {isLoading ? (
        <Skeleton variant="text" width={60} height={50} sx={{ mx: 'auto' }} />
      ) : (
        <Typography variant="h3" color="primary.main">
          {value}
        </Typography>
      )}
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Paper>
  );
}
