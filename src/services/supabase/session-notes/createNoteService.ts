import { supabase } from '@/config/supabase';
import { type NoteDTO } from '@/models/domain/note/noteDTO';

export async function createNoteService(
  body: Omit<NoteDTO, 'id'>,
): Promise<{ data: NoteDTO | null; error: Error | null }> {
  const { data, error } = await supabase.from('session_notes').insert(body).select().single();
  if (error) {
    return { data: null, error: new Error(error.message) };
  }

  return { data: data as NoteDTO, error: null };
}
