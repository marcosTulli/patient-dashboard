'use client';
import useDialogs from '@/hooks/overlays/useDialogs';
import { notesStore } from '../store/notesStore';
import { useGetNotes } from './useGetNotes';
import { useCreateNote } from './useCreateNote';
import useDeleteNote from './useDeleteNote';
import { type NoteDTO } from '@/models/domain/note/noteDTO';

export function useNotes() {
  const { noteToDelete, setNoteToDelete } = notesStore();
  const { toggleCreateDialog, toggleDeleteDialog } = useDialogs();
  const { createNote } = useCreateNote();
  const { deleteNote } = useDeleteNote();
  const { notes, isLoading, error } = useGetNotes();

  const handleCreateNote = (noteData: Omit<NoteDTO, 'id'>) => {
    createNote(noteData);
    toggleCreateDialog();
  };

  const handleDeleteClick = (id: string) => {
    setNoteToDelete(id);
    toggleDeleteDialog();
  };

  const handleConfirmDelete = () => {
    if (noteToDelete) {
      deleteNote(noteToDelete);
      setNoteToDelete(null);
    }
    toggleDeleteDialog();
  };

  return {
    notes,
    isLoading,
    error,
    noteToDelete,
    handleCreateNote,
    deleteNote,
    handleConfirmDelete,
    handleDeleteClick,
  };
}
