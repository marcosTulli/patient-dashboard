'use client';

import * as React from 'react';
import { type CreateItemDialogProps } from '@/models';
import useDialogs from '@/hooks/overlays/useDialogs';
import DialogTrigger from './DialogTrigger';
import Form from '../Forms/Form';
import { usePatientTableStore } from '@/components/pages/patients-list/store/usePatientTableStore';

const EditItemDialog: React.FC<CreateItemDialogProps> = ({
  onSubmit,
  formFields,
  title,
  acceptButtonLabel,
  openDialogButtonLabel,
  isLoading,
  cancelButtonLabel,
  displayButton,
}) => {
  const { toggleEditDialog, isOpenEditDialog } = useDialogs();
  const { clearSelection } = usePatientTableStore();
  const toggle = () => {
    clearSelection();
    toggleEditDialog();
  };

  return (
    <DialogTrigger
      title={title}
      openDialogButtonLabel={openDialogButtonLabel}
      toggle={toggle}
      isOpen={isOpenEditDialog}
      displayButton={displayButton}
      renderContent={() => (
        <Form
          formFields={formFields}
          isLoading={isLoading}
          toggle={toggle}
          onSubmit={onSubmit}
          acceptButtonLabel={acceptButtonLabel}
          cancelButtonLabel={cancelButtonLabel}
        />
      )}
    />
  );
};

export default EditItemDialog;
