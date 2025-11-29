'use client';

import React from 'react';
import { usePatientTableStore } from '@/components/pages/patients-list/store/usePatientTableStore';
import useDialogs from '@/hooks/overlays/useDialogs';
import DialogTrigger from './DialogTrigger';
import Alert from './Alert';

interface DeleteItemProps {
  onSubmit: () => void;
  content: { alertMessage: string };
  title: string;
  acceptButtonLabel: string;
  displayButton: boolean;
  cancelButtonLabel: string;
  id: string;
}

const DeleteItemDialog: React.FC<DeleteItemProps> = ({
  onSubmit,
  content,
  title,
  acceptButtonLabel,
  cancelButtonLabel,
  displayButton,
  id,
}) => {
  const { toggleDeleteDialog, isOpendeleteDialog } = useDialogs();
  const { clearSelection } = usePatientTableStore();

  const toggle = () => {
    clearSelection();
    toggleDeleteDialog();
  };

  return (
    <DialogTrigger
      title={title}
      id={id}
      toggle={toggle}
      displayButton={displayButton}
      openDialogButtonLabel="Open"
      isOpen={isOpendeleteDialog}
      renderContent={() => (
        <Alert
          content={content}
          toggle={toggle}
          onSubmit={onSubmit}
          acceptButtonLabel={acceptButtonLabel}
          cancelButtonLabel={cancelButtonLabel}
        />
      )}
    />
  );
};

export default DeleteItemDialog;
