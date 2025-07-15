'use client';

import type React from 'react';
import { useMemo } from 'react';
import { Box, Sheet, Typography } from '@mui/joy';
import { usePatientTableStore } from './store/usePatientTableStore';
import type { PatientListRequest } from '@/models/patients';
import useList from './hooks/useList';
import TableToolbar from './TableToolbar';
import TableHead from './TableHead';
import TablePagination from './TablePagination';
import PatientDialog from './PatientDialog';
import DeleteAlert from './DeleteAlert';
import TableBody from './TableBody';

const PatientsTable: React.FC = () => {
  const { page, take, filter, sort } = usePatientTableStore();

  const requestBody: PatientListRequest = useMemo(
    () => ({
      pagination: { page, take },
      filter: Object.keys(filter).length > 0 ? filter : null,
      sort: sort.field ? sort : null,
    }),
    [page, take, filter, sort],
  );

  const { patients, total, error, isPending } = useList(requestBody);

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="danger">
          Error loading patients: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'sm',
          overflow: 'hidden',
        }}
      >
        <TableToolbar />

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
            <TableHead patients={patients || []} />
            <TableBody patients={patients || []} loading={isPending} />
          </Box>
        </Box>

        <TablePagination total={total || 0} />
      </Sheet>

      <PatientDialog />
      <DeleteAlert />
    </Box>
  );
};

export default PatientsTable;
