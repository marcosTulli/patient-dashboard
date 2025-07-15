'use client';

import { HeaderColumn } from '@/models/tables';
import { SortFields } from '@models/patients';

export const headerConfig: HeaderColumn[] = [
  {
    key: 'firstName',
    label: 'First Name',
    sortable: true,
    sortField: SortFields.firstName,
    width: 150,
  },
  {
    key: 'lastName',
    label: 'Last Name',
    sortable: true,
    sortField: SortFields.lastName,
    width: 150,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    sortField: SortFields.email,
    width: 200,
  },
  {
    key: 'phoneNumber',
    label: 'Phone',
    sortable: false,
    width: 150,
  },
  {
    key: 'dob',
    label: 'Date of Birth',
    sortable: true,
    sortField: SortFields.dob,
    width: 120,
  },
];
