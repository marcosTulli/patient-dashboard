'use client';

import { type Patient, SortFields } from '@/models/patients';
import { MergedColumn } from '@/models/table';

export const patientColumns: MergedColumn<Patient, SortFields>[] = [
  {
    key: 'firstName',
    label: 'First Name',
    render: (p) => p.firstName,
    sortable: true,
    sortField: SortFields.firstName,
    width: 150,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    render: (p) => p.lastName,
    sortable: true,
    sortField: SortFields.lastName,
    width: 150,
  },
  {
    key: 'email',
    label: 'Email',
    render: (p) => p.email,
    sortable: true,
    sortField: SortFields.email,
    width: 200,
  },
  {
    key: 'phone',
    label: 'Phone',
    render: (p) => p.phoneNumber ?? '-',
    sortable: false,
    width: 150,
  },
  {
    key: 'dob',
    label: 'DOB',
    render: (p) => (p.dob ? new Date(p.dob).toLocaleDateString() : '-'),
    sortable: true,
    sortField: SortFields.dob,
    width: 120,
  },
];
