'use client';

import React from 'react';
import useList from './hooks/useList';
import { PatientListRequest } from '@/models/patients';
import { Box, CircularProgress, Typography } from '@mui/joy';

const PatientsTable = () => {
  const defaultRequestBody: PatientListRequest = {
    pagination: {
      page: 1,
      take: 20,
    },
  };
  const { patients, isPending } = useList(defaultRequestBody);

  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Typography>Patients Table</Typography>
      {isPending ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress size="lg" />
        </Box>
      ) : (
        <Box paddingTop={2}>
          {patients?.map((patient) => (
            <Box key={patient._id} display={'flex'} gap={'1rem'}>
              <div> {patient.firstName}</div>
              <div> {patient.lastName}</div>
              <div> {patient.email}</div>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default PatientsTable;
