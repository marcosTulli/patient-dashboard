'use client';

import type React from 'react';
import { Box, Sheet, Typography } from '@mui/joy';
import PatientDialog from './PatientDialog';
import DeleteAlert from './DeleteAlert';
import TableControls from '@/components/common/Table/Controls';
import TableHead from '@/components/common/Table/Head';
import TablePagination from '@/components/common/Table/Pagination';
import TableBody from '@/components/common/Table/Body';
import { filterConfig, headerConfig, patientColumns } from './config';
import usePatientsTable from './hooks/usePatiensTable';

const PatientsTable: React.FC = () => {
  const {
    page,
    sort,
    take,
    selectedRows,
    filter,
    patients,
    total,
    error,
    isPending,
    setFilter,
    setSort,
    toggleRow,
    toggleSelectAll,
    setPage,
    setTake,
    clearSelection,
    handleAdd,
    handleDeleteSelected,
    getRowId,
    handleEdit,
    handleDelete,
  } = usePatientsTable();

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography color="danger">
          Error loading patients: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'sm',
          overflow: 'hidden',
        }}
      >
        <TableControls
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
              columns={headerConfig}
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
