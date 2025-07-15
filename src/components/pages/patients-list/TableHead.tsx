'use client';

import type React from 'react';
import { Checkbox, IconButton, Typography } from '@mui/joy';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { type Patient, SortFields, SortDirection } from '@/models/patients';
import { usePatientTableStore } from './store/usePatientTableStore';

interface PatientsTableHeadProps {
  patients: Patient[];
}

const TableHHead: React.FC<PatientsTableHeadProps> = ({ patients }) => {
  const { selectedRows, sort, toggleSelectAll, setSort } =
    usePatientTableStore();

  const allSelected =
    patients.length > 0 && patients.every((p) => selectedRows.has(p._id));
  const someSelected = patients.some((p) => selectedRows.has(p._id));

  const handleSort = (field: SortFields) => {
    const newDirection =
      sort.field === field && sort.direction === SortDirection.ASC
        ? SortDirection.DESC
        : SortDirection.ASC;

    setSort({ field, direction: newDirection });
  };

  const getSortIcon = (field: SortFields) => {
    if (sort.field !== field) return null;
    return sort.direction === SortDirection.ASC ? (
      <ChevronUp size={16} />
    ) : (
      <ChevronDown size={16} />
    );
  };

  const SortableHeader: React.FC<{
    field: SortFields;
    children: React.ReactNode;
  }> = ({ field, children }) => (
    <th>
      <IconButton
        variant="plain"
        onClick={() => handleSort(field)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          p: 0,
          minHeight: 'auto',
          fontWeight: 'lg',
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'primary.500',
          },
        }}
      >
        <Typography level="title-sm" fontWeight="lg">
          {children}
        </Typography>
        {getSortIcon(field)}
      </IconButton>
    </th>
  );

  return (
    <thead>
      <tr>
        <th style={{ width: '48px' }}>
          <Checkbox
            checked={allSelected}
            indeterminate={someSelected && !allSelected}
            onChange={() => toggleSelectAll(patients)}
          />
        </th>
        <SortableHeader field={SortFields.firstName}>First Name</SortableHeader>
        <SortableHeader field={SortFields.lastName}>Last Name</SortableHeader>
        <SortableHeader field={SortFields.email}>Email</SortableHeader>
        <SortableHeader field={SortFields.phoneNumber}>Phone</SortableHeader>
        <SortableHeader field={SortFields.dob}>Date of Birth</SortableHeader>
        <th style={{ width: '120px' }}>
          <Typography level="title-sm" fontWeight="lg">
            Actions
          </Typography>
        </th>
      </tr>
    </thead>
  );
};

export default TableHHead;
