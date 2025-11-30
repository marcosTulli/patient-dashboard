'use client';
import React from 'react';
import { LabelSmall } from '@components/common/Text/components';

interface NoteCardDetailsProps {
  sessionDate: string;
}

export const NoteCardDetails: React.FC<NoteCardDetailsProps> = ({ sessionDate }) => {
  return <LabelSmall sx={{ color: 'text.secondary', mb: 1.5 }}>{sessionDate}</LabelSmall>;
};
