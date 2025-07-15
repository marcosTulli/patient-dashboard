import { create } from 'zustand';
import { PatientFilter, PatientSort, SortDirection, SortFields } from '@models/patients';

type PatientTableState = {
  page: number;
  take: number;
  filter: PatientFilter;
  sort: PatientSort;
  setPage: (page: number) => void;
  setFilter: (filter: Partial<PatientFilter>) => void;
  setSort: (sort: PatientSort) => void;
};

export const usePatientTableStore = create<PatientTableState>((set) => ({
  page: 1,
  take: 10,
  filter: {},
  sort: { field: SortFields.lastName, direction: SortDirection.ASC },
  setPage: (page) => set({ page }),
  setFilter: (filter) => set((state) => ({ filter: { ...state.filter, ...filter } })),
  setSort: (sort) => set({ sort }),
}));
