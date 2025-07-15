import { Filters, PatientFilter } from '@/models/patients';
import { FilterField } from '@/models/table';

export const filterConfig: FilterField<PatientFilter>[] = [
  {
    key: Filters.firstName,
    label: 'First Name',
    placeholder: 'Search first name...',
    searchable: true,
  },
  {
    key: Filters.lastName,
    label: 'Last Name',
    placeholder: 'Search last name...',
    searchable: true,
  },
  {
    key: Filters.email,
    label: 'Email',
    placeholder: 'Search email...',
    searchable: true,
  },
  {
    key: Filters.phoneNumber,
    label: 'Phone',
    placeholder: 'Search phone...',
    searchable: true,
  },
];
