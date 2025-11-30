import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type NoteDTO } from '@/models/domain/note/noteDTO';
import { mutationHandlers } from '@/hooks/utils';
import { createNoteService } from '@/services/supabase/session-notes/createNoteService';

export function useCreateNote() {
  const queryClient = useQueryClient();

  const { onSuccess } = mutationHandlers({
    queryClient,
    queryKey: ['session-notes'],
    successMessage: 'Note deleted succesfully',
    errorMessage: 'Unable to delete note',
  });

  const { mutateAsync: createNote, isPending } = useMutation({
    mutationFn: (values: Omit<NoteDTO, 'id'>) => createNoteService(values),
    onSuccess,
  });

  return { createNote, isPending };
}
