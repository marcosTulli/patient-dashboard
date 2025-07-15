'use client';

import React from 'react';
import useList from './hooks/useList';
import { PatientListRequest, SortDirection } from '@/models/patients';
import { Box, Typography } from '@mui/joy';

const PatientsTable = () => {
  const defaultRequestBody: PatientListRequest = {
    pagination: {
      page: 1,
      take: 20,
    },
    sort: {
      direction: SortDirection.DESC,
      field: 'firstName',
    },
  };
  const { patients, isPending } = useList(defaultRequestBody);

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Typography>Patients Table</Typography>
      {isPending ? (
        <Box>Loading</Box>
      ) : (
        <Box paddingTop={2}>
          {patients?.map((patient) => (
            <Box key={patient.id} display={'flex'} gap={'1rem'}>
              <div> {patient.firstName}</div>
              <div> {patient.lastName}</div>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PatientsTable;
