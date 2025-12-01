export const queryKeys = {
  sessionNotes: 'session-notes',
  patients: 'patients',
  allPatients: 'all-patients',
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
