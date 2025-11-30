export const queryKeys = {
  sessionNotes: 'session-notes',
  patients: 'patients',
} as const;

export type QueryKeys = (typeof queryKeys)[keyof typeof queryKeys];
