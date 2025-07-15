'use client';

import { type Patient } from '@/models/patients';
import { MergedColumn } from '@/models/table';

export const patientColumns: MergedColumn<Patient>[] = [
  {
    key: 'firstName',
    label: 'First Name',
    render: (p) => p.firstName,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    render: (p) => p.lastName,
  },
  {
    key: 'email',
    label: 'Email',
    render: (p) => p.email,
  },
  {
    key: 'phone',
    label: 'Phone',
    render: (p) => p.phoneNumber ?? '-',
  },
  {
    key: 'dob',
    label: 'DOB',
    render: (p) => (p.dob ? new Date(p.dob).toLocaleDateString() : '-'),
  },
];
