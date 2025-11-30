'use client';
import React from 'react';
import { Box, Divider } from '@mui/material';
import { LabelMedium, LabelSmall, TitleMedium } from '@components/common/Text/components';

interface NoteCardBodyProps {
  quickNotes: string;
  sessionDuration: number;
  displayFullNotes: boolean;
}

export const NoteCardBody: React.FC<NoteCardBodyProps> = ({
  quickNotes,
  sessionDuration,
  displayFullNotes,
}) => {
  return (
    <>
      <Divider sx={{ my: 1.5 }} />

      {displayFullNotes && (
        <TitleMedium sx={{ color: 'text.primary', mb: 2 }}>Session Notes</TitleMedium>
      )}

      <LabelMedium
        sx={{
          color: 'text.primary',
          mb: 1.5,
          lineHeight: displayFullNotes ? 1.8 : 1.6,
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
          whiteSpace: displayFullNotes ? 'pre-wrap' : 'normal',
        }}
      >
        {quickNotes}
      </LabelMedium>

      <Box
        display="flex"
        alignItems="center"
        gap={0.5}
        sx={{
          bgcolor: 'primary.light',
          borderRadius: 1,
          px: 1.5,
          py: 0.5,
          width: 'fit-content',
        }}
      >
        <LabelSmall sx={{ color: 'primary.dark', fontWeight: 600 }}>Duration:</LabelSmall>
        <LabelSmall sx={{ color: 'primary.dark' }}>{sessionDuration} min</LabelSmall>
      </Box>
    </>
  );
};
