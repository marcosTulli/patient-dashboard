// DialogTrigger.js
import * as React from 'react';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
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
        <Button variant="contained" color="primary" onClick={toggle}>
          {openDialogButtonLabel}
        </Button>
      )}
      <Dialog
        open={isOpen}
        onClose={toggle}
        PaperProps={{
          sx: {
            width: '600px',
            maxWidth: '90vw',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
          {renderContent ? renderContent() : children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogTrigger;
