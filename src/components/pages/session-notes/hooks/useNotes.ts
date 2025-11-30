'use client';
import { useGetNotes } from './useGetNotes';

export function useNotes() {
  const { notes, isLoading, error } = useGetNotes();

  return {
    notes,
    isLoading,
    error,
  };
}
