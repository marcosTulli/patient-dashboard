'use client';

import type React from 'react';
import DeleteItemDialog from '@/components/common/Overlays/DeleteItemDialog';
import usePatientsTable from '../hooks/usePatientsTable';

export const DeleteMany: React.FC = () => {
  const { selectedRows, handleDeleteSelected } = usePatientsTable();

  const alertContent = {
    alertMessage: `Are you sure you want to delete all selected patients? `,
  };

  const submitDeletePatients = () => {
    handleDeleteSelected({ selectedRows });
  };

  return (
    <DeleteItemDialog
      id="delete-many-patients"
      title="Delete all selected Patients"
      acceptButtonLabel="Delete"
      content={alertContent}
      cancelButtonLabel="Cancel"
      displayButton={false}
      onSubmit={submitDeletePatients}
    />
  );
};
