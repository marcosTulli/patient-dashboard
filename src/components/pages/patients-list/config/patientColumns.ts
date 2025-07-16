import { Patient, SortFields } from '@/models/patients';
import { Column } from '@/models/table';

export const patientColumns: Column<Patient, SortFields>[] = [
  {
    key: 'firstName',
    label: 'First Name',
    render: (p) => p.firstName,
    sortable: true,
    sortField: SortFields.firstName,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    sortable: true,
    render: (p) => p.lastName,
    sortField: SortFields.lastName,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    render: (p) => p.email,
    sortField: SortFields.email,
  },
  {
    key: 'phone',
    label: 'Phone',
    sortable: true,
    render: (p) => p.phoneNumber ?? '-',
    sortField: SortFields.phoneNumber,
  },
  {
    sortable: true,
    key: 'dob',
    label: 'Date of Birth',
    render: (p) =>
      p.dob
        ? new Date(p.dob).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
        : '-',
    sortField: SortFields.dob,
  },
];
