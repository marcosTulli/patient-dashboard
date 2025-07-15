// src/components/TableHead.tsx
'use client ';
import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Patient, SortDirection, SortFields } from '@models/patients';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { usePatientTableStore } from './store/usePatientTableStore';
import { Checkbox } from '@mui/joy';

const columns = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'email', label: 'Email' },
  { id: 'phoneNumber', label: 'Phone' },
  { id: 'dob', label: 'Date of Birth' },
];

const TableHead = ({ patients }: { patients: Patient[] }) => {
  const { sort, setSort, toggleSelectAll, selectedRows } =
    usePatientTableStore();

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
        <Box component="th" sx={{ width: '50px', textAlign: 'center' }}>
          <Checkbox
            checked={
              patients.length > 0 &&
              patients.every((p) => selectedRows.has(p._id))
            }
            indeterminate={
              selectedRows.size > 0 && selectedRows.size < patients.length
            }
            onChange={() => toggleSelectAll(patients)}
            className="custom-checkbox"
            aria-label="Select all rows"
          />
        </Box>
        {columns.map((col) => {
          const active = sort.field === col.id;
          return (
            <Box
              component="th"
              key={col.id}
              sx={{
                minWidth: { xs: 100, sm: 130 },
                textAlign: 'left',
                '&:hover': { bgcolor: 'background.level2' },
                transition: 'background-color 0.2s ease',
              }}
            >
              <Box
                component="button"
                onClick={() => handleSort(col.id as SortFields)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  width: '100%',
                  py: 0,
                  bgcolor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
                className="text-gray-800 hover:text-blue-600"
                aria-label={`Sort by ${col.label} ${active ? (sort.direction === 'asc' ? 'ascending' : 'descending') : ''}`}
              >
                <Typography
                  level="body-sm"
                  fontWeight="lg"
                  className="font-semibold"
                >
                  {col.label}
                </Typography>
                <ArrowDownwardIcon
                  sx={{
                    opacity: active ? 1 : 0.3,
                    transform:
                      active && sort.direction === 'asc'
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    transition: '0.2s ease-in-out',
                    fontSize: '1rem',
                  }}
                />
              </Box>
            </Box>
          );
        })}
        <Box component="th" sx={{ width: '100px', textAlign: 'center' }}>
          <Typography level="body-sm" fontWeight="lg" className="font-semibold">
            Actions
          </Typography>
        </Box>
      </tr>
    </thead>
  );
};

export default TableHead;
