import { Patient } from '@/models/patients';
import { create } from 'zustand';

interface SelectedRowStore {
  selectedRow: Patient | null;
  setSelectedRow: (row: Patient) => void;
  clearSelectedRow: () => void;
}

const useSelectedRowStore = create<SelectedRowStore>((set) => ({
  selectedRow: null,
  setSelectedRow: (row) => set({ selectedRow: row }),
  clearSelectedRow: () => set({ selectedRow: null }),
}));

export default useSelectedRowStore;
