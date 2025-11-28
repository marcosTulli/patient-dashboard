'use client';

import type React from 'react';
import { Box } from '@mui/joy';
import PatientsTableError from './PatientsTable.Error';
import { type PropsWithChildren } from 'react';

const PatientsTableContainer: React.FC<PropsWithChildren> = ({ children }) => {
  <PatientsTableError />;

  return (
    <Box sx={{ overflow: 'auto' }}>
      <Box
        component="table"
        sx={{
          width: '100%',
          borderCollapse: 'collapse',
          '& th, & td': {
            textAlign: 'left',
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PatientsTableContainer;
