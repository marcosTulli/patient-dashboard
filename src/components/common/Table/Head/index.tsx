'use client';

import React from 'react';
import { Checkbox, IconButton, Typography } from '@mui/material';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SortDirection, type TableHeadProps } from '@/models/table';
import { useUser } from '@/hooks/auth';

function TableHead<TRow, TSortField extends string = string>({
  data,
  selectedRows,
  sort,
  actionsWidth = 120,
  columns,
  toggleSelectAll,
  setSort,
  getRowId,
}: TableHeadProps<TRow, TSortField>) {
  const allSelected = data.length > 0 && data.every((item) => selectedRows.has(getRowId(item)));
  const someSelected = data.some((item) => selectedRows.has(getRowId(item)));

  const { user } = useUser();

  const handleSort = (field: TSortField) => {
    if (sort.field === field && sort.direction === SortDirection.ASC) {
      setSort({ field, direction: SortDirection.DESC });
    } else {
      setSort({ field, direction: SortDirection.ASC });
    }
  };

  const getSortIcon = (field: TSortField) => {
    if (sort.field !== field) return null;
    return sort.direction === SortDirection.ASC ? (
      <ChevronUp size={16} />
    ) : (
      <ChevronDown size={16} />
    );
  };

  const SortableHeader: React.FC<{
    field: TSortField;
    children: React.ReactNode;
  }> = ({ field, children }) => (
    <th style={{ cursor: 'pointer' }}>
      <IconButton
        onClick={() => handleSort(field)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          p: 0,
          minHeight: 'auto',
          fontWeight: 700,
          color: 'text.primary',
          borderRadius: 1,
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'primary.main',
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
        <Typography variant="subtitle2" fontWeight={700}>
          {children}
        </Typography>
        {getSortIcon(field)}
      </IconButton>
    </th>
  );

  return (
    <thead>
      <tr>
        {user?.isAuthorized && (
          <th style={{ width: '48px' }}>
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected && !allSelected}
              onChange={() => toggleSelectAll(data)}
              aria-label="select all rows"
            />
          </th>
        )}

        {columns?.map(({ key, label, sortable, sortField, width }) =>
          sortable && sortField ? (
            <SortableHeader key={String(key)} field={sortField as TSortField}>
              {label}
            </SortableHeader>
          ) : (
            <th key={String(key)} style={{ width }}>
              <Typography variant="subtitle2" fontWeight={700}>
                {label}
              </Typography>
            </th>
          ),
        )}

        {user?.isAuthorized && (
          <th style={{ width: actionsWidth }}>
            <Typography variant="subtitle2" fontWeight={700}>
              Actions
            </Typography>
          </th>
        )}
      </tr>
    </thead>
  );
}

export default TableHead;
