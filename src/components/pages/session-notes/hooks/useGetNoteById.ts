import { queryKeys } from '@/config/queryKeys';
import { Note } from '@/models/domain/note';
import { getNoteByIdService } from '@/services/supabase/session-notes/getNoteByIdService';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export function useGetNoteById() {
  const { id } = useParams() as { id: string };
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.sessionNotes, id],
    queryFn: () => getNoteByIdService(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  const note = data?.data ? Note.FromJSON(data.data) : undefined;
  return { note, isLoading, error };
}
