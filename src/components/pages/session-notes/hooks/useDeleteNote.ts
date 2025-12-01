import { queryKeys } from '@/config/queryKeys';
import { mutationHandlers } from '@/hooks/utils';
import { deleteNotesService } from '@/services/supabase/session-notes/deleteNoteService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function useDeleteNote() {
  const queryClient = useQueryClient();

  const { onSuccess } = mutationHandlers({
    queryClient,
    queryKey: [queryKeys.sessionNotes],
    successMessage: 'Note deleted succesfully',
    errorMessage: 'Unable to delete note',
  });

  const { mutateAsync: deleteNote, isPending } = useMutation({
    mutationFn: (id: string) => deleteNotesService(id),
    onSuccess,
  });
  return { deleteNote, isPending };
}

export default useDeleteNote;
