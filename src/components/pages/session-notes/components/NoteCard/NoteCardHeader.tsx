'use client';
import React from 'react';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TitleMedium } from '@components/common/Text/components';

interface NoteCardHeaderProps {
  clientName: string;
  onDelete?: (e: React.MouseEvent) => void;
}

export const NoteCardHeader: React.FC<NoteCardHeaderProps> = ({ clientName, onDelete }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
      <TitleMedium sx={{ color: 'text.primary', fontWeight: 600 }}>{clientName}</TitleMedium>
      {onDelete && (
        <IconButton
          size="small"
          onClick={onDelete}
          sx={{
            color: 'error.main',
            '&:hover': {
              bgcolor: 'error.light',
              color: 'error.contrastText',
            },
          }}
          aria-label="delete note"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
};
