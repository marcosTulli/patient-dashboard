'use client';
import React from 'react';
import { CardContent } from '@mui/material';
import { type Note } from '@models/domain/note';
import { NoteCardContainer } from './NoteCardContainer';
import { NoteCardHeader } from './NoteCardHeader';
import { NoteCardDetails } from './NoteCardDetails';
import { NoteCardBody } from './NoteCardBody';
import { useNoteCard } from '../../hooks/useNoteCard';

interface NoteCardProps {
  note: Note;
  onDelete?: (id: string) => void;
  displayFullNotes?: boolean;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete, displayFullNotes = false }) => {
  const { truncateText, handleCardClick, handleDeleteClick } = useNoteCard();

  return (
    <NoteCardContainer
      displayFullNotes={displayFullNotes}
      onClick={(e) => handleCardClick(e, displayFullNotes, note.id())}
    >
      <CardContent
        sx={{ pb: displayFullNotes ? 3 : 1, p: displayFullNotes ? { xs: 3, sm: 4, md: 5 } : 2 }}
      >
        <NoteCardHeader
          clientName={note.clientName()}
          onDelete={onDelete ? (e) => handleDeleteClick(e, onDelete, note.id()) : undefined}
        />

        <NoteCardDetails sessionDate={note.sessionDate()} />

        <NoteCardBody
          quickNotes={displayFullNotes ? note.quickNotes() : truncateText(note.quickNotes(), 100)}
          sessionDuration={note.sessionDuration()}
          displayFullNotes={displayFullNotes}
        />
      </CardContent>
    </NoteCardContainer>
  );
};
