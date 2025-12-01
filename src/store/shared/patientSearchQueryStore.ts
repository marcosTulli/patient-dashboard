import { create } from 'zustand';

interface PatientSearchQueryState {
  patientSearchQuery: string;
  setPatientSearchQuery: (q: string) => void;
  clearPatientSearchQuery: () => void;
}

export const patientSearchQueryStore = create<PatientSearchQueryState>((set) => ({
  patientSearchQuery: '',

  setPatientSearchQuery: (q) => {
    set({ patientSearchQuery: q });
  },

  clearPatientSearchQuery: () => {
    set({ patientSearchQuery: '' });
  },
}));
