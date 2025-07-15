'use client';

import type React from 'react';
import { useMemo } from 'react';
import { Box, Sheet, Typography } from '@mui/joy';
import { usePatientTableStore } from './store/usePatientTableStore';
import {
  Filters,
  PatientFilter,
  SortFields,
  type Patient,
  type PatientListRequest,
} from '@/models/patients';
import useList from './hooks/useList';
import TableToolbar, { FilterField } from './TableToolbar';
import TableHead, { HEADERCOLUMN } from './TableHead';
import TablePagination from './TablePagination';
import PatientDialog from './PatientDialog';
import DeleteAlert from './DeleteAlert';
import TableBody, { Column } from './TableBody';

const filterConfig: FilterField<PatientFilter>[] = [
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
  { key: Filters.dobFrom, label: 'DOB From', type: 'date' },
  { key: Filters.dobTo, label: 'DOB To', type: 'date' },
];

const PatientsTable: React.FC = () => {
  const {
    page,
    take,
    filter,
    sort,
    selectedRows,
    setFilter,
    setSort,
    toggleRow,
    toggleSelectAll,
    setPage,
    setTake,
  } = usePatientTableStore();

  const requestBody: PatientListRequest = useMemo(
    () => ({
      pagination: { page, take },
      filter: Object.keys(filter).length > 0 ? filter : null,
      sort: sort.field ? sort : null,
    }),
    [page, take, filter, sort],
  );

  const { patients, total, error, isPending } = useList(requestBody);

  const patientColumns: Column<Patient>[] = [
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
  const getRowId = (patient: Patient) => {
    return patient._id;
  };

  const handleEdit = () => {
    console.log('EDIT');
  };
  const handleDelete = () => {
    console.log('DELETE');
  };

  const tukiColumns: HEADERCOLUMN[] = [
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
  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="danger">
          Error loading patients: {error.message}
        </Typography>
      </Box>
    );
  }

  const clearSelection = () => {};

  const handleAdd = () => {};

  const handleDeleteSelected = () => {};

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'sm',
          overflow: 'hidden',
        }}
      >
        <TableToolbar
          title="Patients"
          filter={filter}
          setFilter={setFilter}
          selectedRows={selectedRows}
          clearSelection={clearSelection}
          filterConfig={filterConfig}
          onAdd={handleAdd}
          onDeleteSelected={handleDeleteSelected}
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
            <TableHead
              data={patients || []}
              selectedRows={selectedRows}
              toggleSelectAll={toggleSelectAll}
              sort={sort}
              setSort={setSort}
              columns={tukiColumns}
              getRowId={getRowId}
            />

            <TableBody
              data={patients || []}
              isLoading={isPending}
              selectedRows={selectedRows}
              toggleRow={toggleRow}
              getRowId={getRowId}
              columns={patientColumns}
              onEdit={handleEdit}
              onDelete={handleDelete}
              noDataMessage="No patients found"
            />
          </Box>
        </Box>

        <TablePagination
          total={total || 0}
          page={page}
          take={take}
          setPage={setPage}
          setTake={setTake}
          itemName="Patiens"
        />
      </Sheet>

      <PatientDialog />
      <DeleteAlert />
    </Box>
  );
};

export default PatientsTable;
