'use client';

import type React from 'react';
import { Box, Paper } from '@mui/material';
import PatientsTableControls from './PatientsTable.Controls';
import PatientsTableHead from './PatientsTable.Head';
import PatientsTableBody from './PatientsTable.Body';
import PatientsTablePagination from './PatientsTable.Pagination';
import PatientsTableContainer from './PatientsTable.Container';
import EditItemDialog from '@/components/common/Overlays/EditItemDialog';
import usePatientsFormFields from '../hooks/usePatientFormFields';
import useEditPatient from '@/hooks/patients/useEditPatient';
import PatientsTableError from './PatientsTable.Error';
import { type SubmitBody } from '@/models';
import { DeleteOne } from '../dialogs/DeleteOne';
import { DeleteMany } from '../dialogs/DeleteMany';
import { type NewPatient } from '@models/domain/patient/patientDto';

const PatientsTable: React.FC = () => {
  const { editPatientFormFields: formFields } = usePatientsFormFields();
  const { editPatient } = useEditPatient();
  const submitEditPatient = async (values: SubmitBody) => {
    await editPatient(values as NewPatient);
  };

  <PatientsTableError />;
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Paper
        variant="outlined"
        sx={{
          borderRadius: 1,
          overflow: 'hidden',
        }}
      >
        <PatientsTableControls />
        <PatientsTableContainer>
          <PatientsTableHead />
          <PatientsTableBody />
        </PatientsTableContainer>
        <PatientsTablePagination />
      </Paper>

      <EditItemDialog
        title="Edit Patient"
        openDialogButtonLabel="Edit Patient"
        acceptButtonLabel="Edit"
        cancelButtonLabel="Cancel"
        displayButton={false}
        isLoading={false}
        formFields={formFields}
        onSubmit={submitEditPatient}
      />
      <DeleteOne />
      <DeleteMany />
    </Box>
  );
};

export default PatientsTable;
