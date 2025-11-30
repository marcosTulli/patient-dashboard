import { supabase } from '@/config/supabase';

export async function deleteNotesService(id: string): Promise<{ data: null; error: Error | null }> {
  const { error } = await supabase.from('session_notes').delete().eq('id', id);
  if (error) {
    return { data: null, error: new Error(error.message) };
  }
  return { data: null, error: null };
}
