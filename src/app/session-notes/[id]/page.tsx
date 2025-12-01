'use client';
import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { TitleXLarge } from '@components/common/Text/components';
import { BackToNotesButton } from '@/components/pages/session-notes/components/BackToNotes';
import { NoteCard } from '@/components/pages/session-notes/components/NoteCard';
import { useGetNoteById } from '@/components/pages/session-notes/hooks/useGetNoteById';

function SessionNote() {
  const { note, isLoading } = useGetNoteById();

  if (isLoading) {
    return (
      <Box width="100%" display="flex" justifyContent="center" alignItems="center" py={8}>
        <CircularProgress />
      </Box>
    );
  }

  if (!note) {
    return (
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        px={{ xs: 2, sm: 3, md: 4 }}
        py={3}
      >
        <BackToNotesButton />
        <TitleXLarge sx={{ color: 'text.secondary', mt: 4 }}>Note not found</TitleXLarge>
      </Box>
    );
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
      px={{ xs: 2, sm: 3, md: 4 }}
      py={3}
    >
      <Box width="100%" maxWidth="800px">
        <BackToNotesButton />
        <NoteCard note={note} displayFullNotes={true} />
      </Box>
    </Box>
  );
}

export default SessionNote;
