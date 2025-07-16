import {
  type PatientFilter,
  type PatientSort,
  SortDirection,
  SortFields,
} from '@/models/patients';
import { create } from 'zustand';

type Patient = {
  _id: string;
};

type PatientTableState = {
  page: number;
  take: number;
  filter: PatientFilter;
  sort: PatientSort;
  selectedRows: Set<string>;
  setPage: (page: number) => void;
  setTake: (take: number) => void;
  setFilter: (filter: Partial<PatientFilter>) => void;
  setSort: (sort: PatientSort) => void;
  toggleRow: (id: string) => void;
  toggleSelectAll: (patients: Patient[]) => void;
  clearSelection: () => void;
};

export const usePatientTableStore = create<PatientTableState>((set) => ({
  page: 1,
  take: 10,
  filter: {},
  selectedRows: new Set(),
  sort: { field: SortFields.id, direction: SortDirection.ASC },
  setPage: (page) => set({ page }),
  setFilter: (filter) =>
    set((state) => ({
      filter: { ...state.filter, ...filter },
    })),
  setSort: (sort) => set({ sort }),
  setTake: (take) => set({ take }),
  toggleRow: (id) =>
    set((state) => {
      const newSelected = new Set(state.selectedRows);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return { selectedRows: newSelected };
    }),
  toggleSelectAll: (patients) =>
    set((state) => {
      const allSelected = patients.every((p) => state.selectedRows.has(p._id));
      return {
        selectedRows: allSelected
          ? new Set()
          : new Set(patients.map((p) => p._id)),
      };
    }),
  clearSelection: () => set({ selectedRows: new Set() }),
}));
