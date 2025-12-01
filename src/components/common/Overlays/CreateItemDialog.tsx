'use client';

import * as React from 'react';
import { type CreateItemDialogProps } from '@/models';
import useDialogs from '@/hooks/overlays/useDialogs';
import DialogTrigger from './DialogTrigger';
import Form from '../Forms/Form';

const CreateItemDialog: React.FC<CreateItemDialogProps> = ({
  onSubmit,
  formFields,
  title,
  acceptButtonLabel,
  openDialogButtonLabel,
  isLoading,
  cancelButtonLabel,
  displayButton,
}) => {
  const { toggleCreateDialog, isOpenCreateDialog } = useDialogs();

  return (
    <DialogTrigger
      title={title}
      openDialogButtonLabel={openDialogButtonLabel}
      toggle={toggleCreateDialog}
      isOpen={isOpenCreateDialog}
      displayButton={displayButton}
      renderContent={() => (
        <Form
          formFields={formFields}
          isLoading={isLoading}
          toggle={toggleCreateDialog}
          onSubmit={onSubmit}
          acceptButtonLabel={acceptButtonLabel}
          cancelButtonLabel={cancelButtonLabel}
        />
      )}
    />
  );
};

export default CreateItemDialog;
