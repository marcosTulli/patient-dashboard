// DialogTrigger.js
import * as React from 'react';
import { Button, Modal, ModalDialog, DialogTitle, DialogContent } from '@mui/joy';
import { type DialogTriggerProps } from '@/models';

const DialogTrigger: React.FC<DialogTriggerProps> = ({
  id,
  title,
  isOpen,
  children,
  displayButton,
  openDialogButtonLabel,

  toggle,
  renderContent,
}) => {
  return (
    <div key={id}>
      {displayButton && (
        <Button variant="solid" color="primary" onClick={toggle}>
          {openDialogButtonLabel}
        </Button>
      )}
      <Modal open={isOpen} onClose={toggle}>
        <ModalDialog
          sx={{
            width: '600px',
            maxWidth: '90vw',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <DialogTitle>{title}</DialogTitle>
          <DialogContent sx={{ flexGrow: 1, overflowY: 'auto', p: 0 }}>
            {renderContent ? renderContent() : children}
          </DialogContent>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default DialogTrigger;
