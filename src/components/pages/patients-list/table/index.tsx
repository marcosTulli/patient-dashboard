'use client';

import type React from 'react';
import { Box, Sheet } from '@mui/joy';
import PatientsTableControls from './PatientsTable.Controls';
import PatientsTableHead from './PatientsTable.Head';
import PatientsTableBody from './PatientsTable.Body';
import PatientsTablePagination from './PatientsTable.Pagination';
import PatientsTableContainer from './PatientsTable.Container';
import EditItemDialog from '@/components/common/Overlays/EditItemDialog';
import usePatientsFormFields from '../hooks/usePatientFormFields';
import PatientsTableError from './PatientsTable.Error';

const PatientsTable: React.FC = () => {
  const { editPatientFormFields: formFields } = usePatientsFormFields();

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

      <EditItemDialog
        title="Edit Patient"
        openDialogButtonLabel="Edit Patient"
        acceptButtonLabel="Edit"
        cancelButtonLabel="Cancel"
        displayButton={false}
        isLoading={false}
        formFields={formFields}
        onSubmit={() => console.log(formFields)}
      />
    </Box>
  );
};

export default PatientsTable;
