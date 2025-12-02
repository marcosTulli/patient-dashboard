'use client';

import type React from 'react';
import { Box, Typography, Button } from '@mui/material';

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
        width: '100%',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', py: 2 }}>
        <Typography variant="h6">{content.alertMessage}</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          justifyContent: 'flex-end',
          gap: 1.5,
          mt: 2,
        }}
      >
        <Button
          variant="text"
          color="inherit"
          onClick={toggle}
          fullWidth
          sx={{ width: { sm: 'auto' } }}
        >
          {cancelButtonLabel}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleAccept}
          disabled={isLoading}
          fullWidth
          sx={{ width: { sm: 'auto' } }}
        >
          {acceptButtonLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default Alert;
