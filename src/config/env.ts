interface Env {
  patientsApiUrl: string;
  patientsApiKey: string;
  notesUrl: string;
  notesApiKey: string;
}

export const env: Env = {
  patientsApiUrl: process.env.NEXT_PUBLIC_PATIENTS_API_URL || '',
  patientsApiKey: process.env.NEXT_PUBLIC_PATIENTS_API_KEY || '',
  notesUrl: process.env.NEXT_PUBLIC_NOTES_API_URL || ' ',
  notesApiKey: process.env.NEXT_PUBLIC_NOTES_API_KEY || '',
} as const;

export const envJSON = JSON.stringify(env, null, 2);
