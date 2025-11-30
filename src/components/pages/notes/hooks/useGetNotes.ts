import { Note } from '@/models/domain/note';
import { getNotesService } from '@/services/supabase/notes/getNotesService';
import { useQuery } from '@tanstack/react-query';

export function useGetNotes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['notes'],
    queryFn: getNotesService,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    staleTime: 5 * 60 * 1000,
  });

  const notes = data?.data?.map((noteDto) => Note.FromJSON(noteDto) ?? null);

  return { notes, isLoading, error };
}
