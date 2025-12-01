import { type Patient } from '@/models/domain/patient';
import { SortFields } from '@/models/patients';
import { type Column } from '@/models/table';

export const patientColumns: Column<Patient, SortFields>[] = [
  {
    key: 'firstName',
    label: 'First Name',
    render: (p) => p.firstName(),
    sortable: true,
    sortField: SortFields.firstName,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    sortable: true,
    render: (p) => p.lastName(),
    sortField: SortFields.lastName,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    render: (p) => p.email(),
    sortField: SortFields.email,
  },
  {
    key: 'phone',
    label: 'Phone',
    sortable: true,
    render: (p) => p.phoneNumber(),
    sortField: SortFields.phoneNumber,
  },
  {
    sortable: true,
    key: 'dob',
    label: 'Date of Birth',
    render: (p) => p.dob(),
    sortField: SortFields.dob,
  },
];
