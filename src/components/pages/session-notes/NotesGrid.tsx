import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { type Note } from '@/models/domain/note';
import { useNotes } from './hooks/useNotes';
import { NoteCard } from './components/NoteCard';
import { TitleLarge } from '@/components/common/Text/components';

export const NotesGrid: React.FC = () => {
  const { notes, isLoading, handleDeleteClick } = useNotes();

  if (!notes) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
        width="100%"
        maxWidth="1200px"
      >
        <TitleLarge sx={{ color: 'text.secondary' }}>
          No notes yet. Create your first note!
        </TitleLarge>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        maxWidth="1200px"
        py={8}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={3}
      width="100%"
      maxWidth="1200px"
      justifyContent="flex-start"
    >
      {notes?.map((note: Note) => (
        <Box
          key={note.id()}
          sx={{
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(50% - 12px)',
              md: '1 1 calc(33.333% - 16px)',
            },
            minWidth: {
              xs: '100%',
              sm: '280px',
              md: '300px',
            },
          }}
        >
          <NoteCard note={note} onDelete={handleDeleteClick} />
        </Box>
      ))}
    </Box>
  );
};
