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
import { type Patient } from '@/models/patients';
import DeleteItemDialog from '@/components/common/Overlays/DeleteItemDialog';
import useSelectedRowStore from '@/store/table/useSelectedRowStore';
import useDeletePatient from '@/hooks/patients/useDeletePatient';

const PatientsTable: React.FC = () => {
  const { editPatientFormFields: formFields } = usePatientsFormFields();
  const { editPatient } = useEditPatient();
  const { deletePatient } = useDeletePatient();
  const { selectedRow } = useSelectedRowStore();
  const patientName = `${selectedRow.firstName} ${selectedRow.lastName}`;
  const alertContent = {
    alertMessage: `Are you sure you want to delete ${patientName} `,
  };

  const submitEditPatient = async (values: SubmitBody) => {
    await editPatient(values as Patient);
  };

  const submitDeletePatient = async () => {
    await deletePatient(selectedRow._id);
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
      <DeleteItemDialog
        id="delete"
        title="Delete Patient"
        acceptButtonLabel="Delete"
        content={alertContent}
        cancelButtonLabel="Cancel"
        displayButton={false}
        onSubmit={submitDeletePatient}
      />
    </Box>
  );
};

export default PatientsTable;
