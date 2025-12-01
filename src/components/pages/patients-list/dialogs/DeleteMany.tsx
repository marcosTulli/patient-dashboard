'use client';

import type React from 'react';
import usePatientsTable from '../hooks/usePatientsTable';
import DialogTrigger from '@/components/common/Overlays/DialogTrigger';
import Alert from '@/components/common/Overlays/Alert';
import useDialogs from '@/hooks/overlays/useDialogs';
import { usePatientTableStore } from '../store/usePatientTableStore';

export const DeleteMany: React.FC = () => {
  const { selectedRows, handleDeleteSelected } = usePatientsTable();
  const { toggleDeleteManyDialog, isOpenDeleteManyDialog } = useDialogs();
  const { clearSelection } = usePatientTableStore();

  const alertContent = {
    alertMessage: `Are you sure you want to delete all selected patients? `,
  };

  const submitDeletePatients = () => {
    handleDeleteSelected({ selectedRows });
  };

  const toggle = () => {
    clearSelection();
    toggleDeleteManyDialog();
  };

  return (
    <DialogTrigger
      title="Delete all selected Patients"
      id="Delete all selected Patient"
      toggle={toggle}
      displayButton={false}
      openDialogButtonLabel="Open"
      isOpen={isOpenDeleteManyDialog}
      renderContent={() => (
        <Alert
          content={alertContent}
          toggle={toggle}
          onSubmit={submitDeletePatients}
          acceptButtonLabel={'Delete'}
          cancelButtonLabel={'Cancel'}
        />
      )}
    />
  );
};
