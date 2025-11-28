'use client';

import type React from 'react';
import { Box, Typography, Button } from '@mui/joy';

interface AlertProps {
  content: { alertMessage: string };
  acceptButtonLabel: string;
  cancelButtonLabel: string;
  onSubmit: () => void;
  toggle: () => void;
  isLoading?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  content,
  acceptButtonLabel,
  cancelButtonLabel,
  onSubmit,
  toggle,
  isLoading = false,
}) => {
  const handleAccept = () => {
    onSubmit();
    toggle();
  };

  return (
    <Box
      sx={{
        width: '500px',
        maxWidth: '90vw',
        padding: 3,
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Typography level="h3">{content.alertMessage}</Typography>
      </Box>

      <Box mt={4} display="flex" alignContent="flex-end" justifyContent="flex-end" gap={1.5}>
        <Button variant="plain" color="neutral" onClick={toggle}>
          {cancelButtonLabel}
        </Button>
        <Button variant="solid" color="danger" onClick={handleAccept} disabled={isLoading}>
          {acceptButtonLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default Alert;
