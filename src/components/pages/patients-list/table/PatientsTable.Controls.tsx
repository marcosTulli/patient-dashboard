'use client';

import React from 'react';
import TableControls from '@/components/common/Table/Controls';
import { filterConfig } from '../config';
import usePatientsTable from '../hooks/usePatientsTable';
import usePatientsFormFields from '../hooks/usePatientFormFields';
import CreateItemDialog from '@/components/common/Overlays/CreateItemDialog';
import { type SubmitBody } from '@/models';
import { type Patient } from '@/models/patients';
import useCreatePatient from '@hooks/patients/useCreatePatient';
import useDialogs from '@/hooks/overlays/useDialogs';

const PatientsTableControls: React.FC = () => {
  const { selectedRows, filter, setFilter, clearSelection } = usePatientsTable();
  const { toggleDeleteDialog } = useDialogs();

  const { createPatientFormFields } = usePatientsFormFields();
  const { createPatient, isPending } = useCreatePatient();

  const handleSubmit = async (values: SubmitBody) => {
    await createPatient(values as Patient);
  };

  return (
    <TableControls
      title="Patients"
      filter={filter}
      setFilter={setFilter}
      selectedRows={selectedRows}
      clearSelection={clearSelection}
      filterConfig={filterConfig}
      onDeleteSelected={toggleDeleteDialog}
      renderAddDialog={
        <CreateItemDialog
          title="Create New Patient"
          openDialogButtonLabel="Add Patient"
          acceptButtonLabel="Create"
          cancelButtonLabel="Cancel"
          isLoading={isPending}
          formFields={createPatientFormFields}
          onSubmit={handleSubmit}
          displayButton={true}
        />
      }
    />
  );
};

export default PatientsTableControls;
