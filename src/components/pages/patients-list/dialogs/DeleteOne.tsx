'use client';

import type React from 'react';
import DeleteItemDialog from '@/components/common/Overlays/DeleteItemDialog';
import useSelectedRowStore from '@/store/table/useSelectedRowStore';
import useDeletePatient from '@/hooks/patients/useDeletePatient';

export const DeleteOne: React.FC = () => {
  const { deletePatient } = useDeletePatient();
  const { selectedRow } = useSelectedRowStore();
  const patientName = `${selectedRow.firstName} ${selectedRow.lastName}`;
  const alertContent = {
    alertMessage: `Are you sure you want to delete ${patientName} `,
  };

  const submitDeletePatient = async () => {
    await deletePatient(selectedRow._id);
  };

  <DeleteItemDialog
    id="delete"
    title="Delete Patient"
    acceptButtonLabel="Delete"
    content={alertContent}
    cancelButtonLabel="Cancel"
    displayButton={false}
    onSubmit={submitDeletePatient}
  />;
};
