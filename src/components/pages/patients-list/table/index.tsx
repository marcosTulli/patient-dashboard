'use client';

import type React from 'react';
import { Box, Sheet } from '@mui/joy';
import PatientsTableControls from './PatientsTable.Controls';
import PatientsTableHead from './PatientsTable.Head';
import PatientsTableBody from './PatientsTable.Body';
import PatientsTablePagination from './PatientsTable.Pagination';
import PatientsTableError from './PatientsTable.Error';
import PatientsTableContainer from './PatientsTable.Container';

const PatientsTable: React.FC = () => {
  <PatientsTableError />;
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'sm',
          overflow: 'hidden',
        }}
      >
        <PatientsTableControls />
        <PatientsTableContainer>
          <PatientsTableHead />
          <PatientsTableBody />
        </PatientsTableContainer>
        <PatientsTablePagination />
      </Sheet>
    </Box>
  );
};

export default PatientsTable;
