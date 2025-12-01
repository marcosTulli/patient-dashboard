import React from 'react';
import { Box } from '@mui/material';
import { TitleXLarge } from '@components/common/Text/components';
import { CreateNoteDialog } from './CreateNoteDialog';

export const NotesPageHeader: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxWidth="1200px"
    >
      <TitleXLarge>Notes</TitleXLarge>
      <CreateNoteDialog />
    </Box>
  );
};
