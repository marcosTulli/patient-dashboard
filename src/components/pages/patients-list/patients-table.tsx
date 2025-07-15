'use client';

import React from 'react';
import useList from './hooks/useList';
import { PatientListRequest, SortDirection } from '@/models/patients';
import { Box } from '@mui/joy';

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
  const { patients } = useList(defaultRequestBody);

  return (
    <div>
      Patients Table
      {patients && (
        <div>
          {patients.map((patient) => (
            <Box key={patient.id} display={'flex'} gap={'1rem'}>
              <div> {patient.firstName}</div>
              <div> {patient.lastName}</div>
            </Box>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatientsTable;
