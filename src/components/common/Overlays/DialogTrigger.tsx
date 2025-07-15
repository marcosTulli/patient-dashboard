'use client';

import * as React from 'react';
import {
  Button,
  Modal,
  ModalDialog,
  DialogTitle,
  DialogContent,
} from '@mui/joy';
import { DialogTriggerProps } from '@/models';

const DialogTrigger: React.FC<DialogTriggerProps> = ({
  title,
  openDialogButtonLabel,
  toggle,
  renderContent,
  children,
  isOpen,
  showButton = true,
  id,
}) => {
  return (
    <div key={id}>
      {showButton && (
        <Button variant="solid" color="primary" onClick={toggle}>
          {openDialogButtonLabel}
        </Button>
      )}
      <Modal open={isOpen} onClose={toggle}>
        <ModalDialog>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            {renderContent ? renderContent() : children}
          </DialogContent>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default DialogTrigger;
