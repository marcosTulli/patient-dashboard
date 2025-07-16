'use client';

import type React from 'react';
import { Modal, ModalDialog, Typography, Button, Box, Alert } from '@mui/joy';
import { AlertTriangle } from 'lucide-react';
import type { Patient } from '@/models/patients';

interface DeleteAlertProps {
  open?: boolean;
  patient?: Patient | null;
  selectedCount?: number;
  onClose?: () => void;
  onConfirm?: () => void;
  isLoading?: boolean;
}

const DeleteAlert: React.FC<DeleteAlertProps> = ({
  open = false,
  patient = null,
  selectedCount = 0,
  onClose = () => {},
  onConfirm = () => {},
  isLoading = false,
}) => {
  const isMultipleDelete = selectedCount > 0;
  const isSingleDelete = Boolean(patient);

  const getTitle = () => {
    if (isMultipleDelete) {
      return `Delete ${selectedCount} Patient${selectedCount > 1 ? 's' : ''}`;
    }
    if (isSingleDelete) {
      return 'Delete Patient';
    }
    return 'Delete Confirmation';
  };

  const getMessage = () => {
    if (isMultipleDelete) {
      return `Are you sure you want to delete ${selectedCount} selected patient${selectedCount > 1 ? 's' : ''}? This action cannot be undone.`;
    }
    if (isSingleDelete && patient) {
      return `Are you sure you want to delete ${patient.firstName} ${patient.lastName}? This action cannot be undone.`;
    }
    return 'Are you sure you want to proceed with this deletion?';
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        variant="outlined"
        role="alertdialog"
        sx={{ maxWidth: '400px' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <AlertTriangle size={24} color="var(--joy-palette-danger-500)" />
          <Typography level="h4" color="danger">
            {getTitle()}
          </Typography>
        </Box>

        <Alert color="danger" variant="soft" sx={{ mb: 3 }}>
          <Typography level="body-md">{getMessage()}</Typography>
        </Alert>

        {isMultipleDelete && (
          <Typography level="body-sm" color="neutral" sx={{ mb: 3 }}>
            This will permanently remove all selected patients from the system.
          </Typography>
        )}

        {isSingleDelete && patient && (
          <Box
            sx={{
              mb: 3,
              p: 2,
              bgcolor: 'background.level1',
              borderRadius: 'sm',
            }}
          >
            <Typography level="body-sm" fontWeight="lg">
              Patient Details:
            </Typography>
            <Typography level="body-sm">
              Name: {patient.firstName} {patient.lastName}
            </Typography>
            <Typography level="body-sm">Email: {patient.email}</Typography>
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button
            variant="plain"
            color="neutral"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button color="danger" onClick={onConfirm} loading={isLoading}>
            {isMultipleDelete
              ? `Delete ${selectedCount} Patient${selectedCount > 1 ? 's' : ''}`
              : 'Delete Patient'}
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
};

export default DeleteAlert;
