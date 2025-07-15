'use client';

import React from 'react';
import { Checkbox, IconButton, Typography } from '@mui/joy';
import { ChevronUp, ChevronDown } from 'lucide-react';
import {
  PatientSort,
  SortFields,
  Patient,
  SortDirection,
} from '@/models/patients';

export interface HEADERCOLUMN {
  key: keyof Patient;
  label: React.ReactNode;
  sortable?: boolean;
  sortField?: SortFields;
  width?: number | string;
}

interface TableHeadProps {
  data: Patient[];
  selectedRows: Set<string | number>;
  toggleSelectAll: (data: Patient[]) => void;
  sort: PatientSort;
  setSort: (sort: PatientSort) => void;
  columns: HEADERCOLUMN[];
  getRowId: (item: Patient) => string | number;
  actionsWidth?: number | string;
}

function TableHead({
  data,
  selectedRows,
  toggleSelectAll,
  sort,
  setSort,
  columns,
  getRowId,
  actionsWidth = 120,
}: TableHeadProps) {
  const allSelected =
    data.length > 0 && data.every((item) => selectedRows.has(getRowId(item)));
  const someSelected = data.some((item) => selectedRows.has(getRowId(item)));

  const handleSort = (field: SortFields) => {
    if (sort.field === field && sort.direction === SortDirection.ASC) {
      setSort({ field, direction: SortDirection.DESC });
    } else {
      setSort({ field, direction: SortDirection.ASC });
    }
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
    <th style={{ cursor: 'pointer' }}>
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
        aria-sort={
          sort.field === field
            ? sort.direction === SortDirection.ASC
              ? 'ascending'
              : 'descending'
            : undefined
        }
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
            onChange={() => toggleSelectAll(data)}
            aria-label="select all rows"
          />
        </th>

        {columns.map(({ key, label, sortable, sortField, width }) =>
          sortable && sortField ? (
            <SortableHeader key={String(key)} field={sortField}>
              {label}
            </SortableHeader>
          ) : (
            <th key={String(key)} style={{ width }}>
              <Typography level="title-sm" fontWeight="lg">
                {label}
              </Typography>
            </th>
          ),
        )}

        <th style={{ width: actionsWidth }}>
          <Typography level="title-sm" fontWeight="lg">
            Actions
          </Typography>
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
