import { queryKeys } from '@/config/queryKeys';
import { Note } from '@/models/domain/note';
import { getNotesService } from '@/services/supabase/session-notes/getNotesService';
import { useQuery } from '@tanstack/react-query';

export function useGetNotes() {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKeys.sessionNotes],
    queryFn: getNotesService,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 5 * 60 * 1000,
  });

  const notes = data?.data?.map((noteDto) => Note.FromJSON(noteDto) ?? []);

  return { notes, isLoading, error };
}
