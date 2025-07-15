'use client';

import React from 'react';
import { Box, Sheet, Typography } from '@mui/joy';
import TableControls, { FilterField } from './Controls';
import TableHead, { HeaderColumn } from './Head';
import TableBody, { Column } from './Body';
import TablePagination from './Pagination';

// -------------------- LOCAL TYPES --------------------

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export enum SortFields {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  phoneNumber = 'phoneNumber',
  dob = 'dob',
}

export interface Sort<SortField = string> {
  field: SortField;
  direction: SortDirection;
}

type GenericEntityTableProps<
  TFilter extends object,
  TRow,
  TSortField extends string = string,
> = {
  title: string;
  data: TRow[];
  total: number;
  isLoading: boolean;
  error?: Error | null;

  page: number;
  take: number;
  filter: TFilter;
  sort: Sort<TSortField>;
  selectedRows: Set<string>;

  setFilter: (f: Partial<TFilter>) => void;
  setPage: (page: number) => void;
  setTake: (take: number) => void;
  setSort: (s: Sort<TSortField>) => void;

  clearSelection: () => void;
  toggleRow: (id: string) => void;
  toggleSelectAll: (rows: TRow[]) => void;

  getRowId: (row: TRow) => string;

  columns: Column<TRow>[];
  headColumns: HeaderColumn<TSortField>[];

  filterConfig: FilterField<TFilter>[];
  onAdd?: () => void;
  onDeleteSelected?: () => void;
  onEdit?: (row: TRow) => void;
  onDelete?: (row: TRow) => void;
  noDataMessage?: string;
  itemName?: string;
};

// -------------------- COMPONENT --------------------

function GenericEntityTable<
  TFilter extends object,
  TRow,
  TSortField extends string = string,
>({
  title,
  data,
  total,
  isLoading,
  error,
  page,
  take,
  filter,
  sort,
  selectedRows,
  setFilter,
  setPage,
  setTake,
  setSort,
  clearSelection,
  toggleRow,
  toggleSelectAll,
  getRowId,
  columns,
  headColumns,
  filterConfig,
  onAdd,
  onDeleteSelected,
  onEdit,
  onDelete,
  noDataMessage = 'No results found',
  itemName = 'Items',
}: GenericEntityTableProps<TFilter, TRow, TSortField>) {
  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="danger">
          Error loading data: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Sheet variant="outlined" sx={{ borderRadius: 'sm', overflow: 'hidden' }}>
        <TableControls<TFilter>
          title={title}
          filter={filter}
          setFilter={(newFilter) => setFilter({ ...filter, ...newFilter })}
          selectedRows={selectedRows}
          clearSelection={clearSelection}
          filterConfig={filterConfig}
          onAdd={onAdd}
          onDeleteSelected={onDeleteSelected}
        />

        <Box sx={{ overflow: 'auto' }}>
          <Box
            component="table"
            sx={{
              width: '100%',
              borderCollapse: 'collapse',
              '& th, & td': {
                textAlign: 'left',
                p: 2,
                borderBottom: '1px solid',
                borderColor: 'divider',
              },
            }}
          >
            <TableHead<TRow, TSortField>
              data={data}
              selectedRows={selectedRows}
              toggleSelectAll={toggleSelectAll}
              sort={sort}
              setSort={setSort}
              columns={headColumns}
              getRowId={getRowId}
            />

            <TableBody<TRow>
              data={data}
              isLoading={isLoading}
              selectedRows={selectedRows}
              toggleRow={toggleRow}
              getRowId={getRowId}
              columns={columns}
              onEdit={onEdit}
              onDelete={onDelete}
              noDataMessage={noDataMessage}
            />
          </Box>
        </Box>

        <TablePagination
          total={total}
          page={page}
          take={take}
          setPage={setPage}
          setTake={setTake}
          itemName={itemName}
        />
      </Sheet>
    </Box>
  );
}

export default GenericEntityTable;
