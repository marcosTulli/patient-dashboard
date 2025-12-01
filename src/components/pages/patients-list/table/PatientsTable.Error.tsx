'use client';

import type React from 'react';
import { Box, Typography } from '@mui/material';
import usePatientsTable from '../hooks/usePatientsTable';

const PatientsTableError: React.FC = () => {
  const { error } = usePatientsTable();
  return (
    error && (
      <Box sx={{ p: 3 }}>
        <Typography color="error">Error loading patients: {error.message}</Typography>
      </Box>
    )
  );
};

export default PatientsTableError;
