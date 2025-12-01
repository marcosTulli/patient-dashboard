'use client';
import type React from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@config/routes';

export function useNoteCard() {
  const router = useRouter();

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
  };

  const handleCardClick = (e: React.MouseEvent, displayFullNotes: boolean, noteId: string) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    if (!displayFullNotes) {
      router.push(`${routes.sessionNotes}/${noteId}`);
    }
  };

  const handleDeleteClick = (
    e: React.MouseEvent,
    onDelete: (id: string) => void,
    noteId: string,
  ) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(noteId);
    }
  };

  return {
    handleDeleteClick,
    handleCardClick,
    truncateText,
  };
}
