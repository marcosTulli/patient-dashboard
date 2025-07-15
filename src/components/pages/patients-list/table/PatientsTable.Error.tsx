'use client';

import type React from 'react';
import { Box, Typography } from '@mui/joy';
import usePatientsTable from '../hooks/usePatiensTable';

const PatientsTableError: React.FC = () => {
  const { error } = usePatientsTable();
  return (
    error && (
      <Box sx={{ p: 3 }}>
        <Typography color="danger">
          Error loading patients: {error.message}
        </Typography>
      </Box>
    )
  );
};

export default PatientsTableError;
