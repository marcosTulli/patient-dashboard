'use client';

import React from 'react';
import TableControls from '@/components/common/Table/Controls';
import { filterConfig } from '../config';
import usePatientsTable from '../hooks/usePatientsTable';
import usePatientsFormFields from '../hooks/usePatientFormFields';
import CreateItemDialog from '@/components/common/Overlays/CreateItemDialog';
import { type SubmitBody } from '@/models';
import useCreatePatient from '@hooks/patients/useCreatePatient';
import useDialogs from '@/hooks/overlays/useDialogs';
import { type NewPatient } from '@/models/domain/patient/patientDto';

const PatientsTableControls: React.FC = () => {
  const { selectedRows, filter, setFilter, clearSelection } = usePatientsTable();
  const { toggleDeleteManyDialog } = useDialogs();

  const { createPatientFormFields } = usePatientsFormFields();
  const { createPatient, isPending } = useCreatePatient();

  const handleSubmit = async (values: SubmitBody) => {
    await createPatient(values as NewPatient);
  };

  return (
    <TableControls
      title="Patients"
      filter={filter}
      setFilter={setFilter}
      selectedRows={selectedRows}
      clearSelection={clearSelection}
      filterConfig={filterConfig}
      onDeleteSelected={toggleDeleteManyDialog}
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
