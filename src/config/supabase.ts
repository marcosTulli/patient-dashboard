import { createClient } from '@supabase/supabase-js';
import { env } from './env';

const supabaseUrl = env.notesUrl;
const supabaseKey = env.notesApiKey;

export const supabase = createClient(supabaseUrl, supabaseKey);
