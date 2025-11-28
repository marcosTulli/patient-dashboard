'use client';

import * as React from 'react';
import { Button, Box } from '@mui/joy';
import { type DialogButtonsProps } from '@/models';

const DialogButtons: React.FC<DialogButtonsProps> = ({
  onClickCancel,
  cancelButtonLabel,
  cancelButtonVariant = 'plain',
  acceptButtonLabel,
  acceptButtonVariant = 'solid',
  disabled = false,
}) => {
  return (
    <Box mt={4} display="flex" justifyContent="flex-end" gap={1.5}>
      <Button variant={cancelButtonVariant} color="neutral" onClick={onClickCancel}>
        {cancelButtonLabel}
      </Button>
      <Button variant={acceptButtonVariant} color="primary" type="submit" disabled={disabled}>
        {acceptButtonLabel}
      </Button>
    </Box>
  );
};

export default DialogButtons;
