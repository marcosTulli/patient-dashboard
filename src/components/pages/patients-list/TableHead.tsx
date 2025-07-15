import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { SortDirection, SortFields } from '@models/patients';
import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';
import { visuallyHidden } from '@mui/utils';
import { usePatientTableStore } from './store/usePatientTableStore';

const columns = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'email', label: 'Email' },
  { id: 'phoneNumber', label: 'Phone' },
  { id: 'dob', label: 'Date of Birth' },
];

export default function TableHead() {
  const { sort, setSort } = usePatientTableStore();
  const handleSort = (field: SortFields) => {
    setSort({
      field,
      direction:
        sort.field === field && sort.direction === SortDirection.ASC
          ? SortDirection.DESC
          : SortDirection.ASC,
    });
  };

  return (
    <thead>
      <tr>
        {columns.map((col) => {
          const active = sort.field === col.id;
          return (
            <th key={col.id}>
              <Link
                component="button"
                underline="none"
                onClick={() => handleSort(col.id as SortFields)}
                endDecorator={
                  <ArrowDownwardIcon
                    sx={{
                      opacity: active ? 1 : 0,
                      transform:
                        active && sort.direction === SortDirection.ASC
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                      transition: '0.2s',
                    }}
                  />
                }
              >
                {col.label}
                {active && (
                  <Box component="span" sx={visuallyHidden}>
                    {sort.direction === 'asc'
                      ? 'sorted ascending'
                      : 'sorted descending'}
                  </Box>
                )}
              </Link>
            </th>
          );
        })}
        <th>Actions</th>
      </tr>
    </thead>
  );
}
