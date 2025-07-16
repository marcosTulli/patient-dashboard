import { Patient } from '@/models/patients';
import { create } from 'zustand';

 const emptyPatient: Patient = {
  _id: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  dob: '',
};
interface SelectedRowStore {
  selectedRow: Patient ;
  setSelectedRow: (row: Patient) => void;
  clearSelectedRow: () => void;
}

const useSelectedRowStore = create<SelectedRowStore>((set) => ({
  selectedRow: emptyPatient,
  setSelectedRow: (row) => set({ selectedRow: row }),
  clearSelectedRow: () => set({ selectedRow: emptyPatient }),
}));

export default useSelectedRowStore;
