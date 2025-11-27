'use client';
import type React from 'react';
import { IconButton } from '@mui/material';
import { SnackbarProvider, closeSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={2000}
      action={(snackbarId) => (
        <IconButton onClick={() => closeSnackbar(snackbarId)} size="small" color="inherit">
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
}
