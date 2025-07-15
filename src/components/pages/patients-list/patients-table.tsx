'use client';
import React from 'react';
import TableToolbar from './TableToolbar';
import TableHead from './TableHead';
import TableBody from './TableBody';
import Sheet from '@mui/joy/Sheet';
import Table from '@mui/joy/Table';
import useList from './hooks/useList';
import { usePatientTableStore } from './store/usePatientTableStore';
import GlobalStyles from '@mui/joy/GlobalStyles'; // For global scrollbar styling
import PatientTablePagination from './TablePagination';

const PatientTable = () => {
  const { page, take, filter, sort, setPage, setTake } = usePatientTableStore();
  const { patients, total, isPending } = useList({
    pagination: { page, take },
    filter,
    sort,
  });

  return (
    <Sheet
      variant="soft"
      className="custom-table-container"
      sx={{
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '500px',
        maxHeight: 'calc(100vh - 120px)',
        overflow: 'hidden',
      }}
    >
      <GlobalStyles
        styles={{
          '*::-webkit-scrollbar': { width: '8px', height: '8px' },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: '4px',
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          '*::-webkit-scrollbar-track': { backgroundColor: 'rgba(0,0,0,0.05)' },
        }}
      />
      <TableToolbar />
      <Table
        aria-label="Patient list table"
        stickyHeader
        hoverRow
        stripe="odd"
        sx={{
          '--Table-headerUnderline': '2px solid',
          '--TableCell-borderColor': 'divider',
          '& thead th': {
            bgcolor: 'background.level1',
            fontWeight: 'lg',
            py: 1.5,
            px: 2,
            borderBottom: '2px solid',
            borderColor: 'divider',
          },
          '& tbody tr': {
            borderBottom: '1px solid',
            borderColor: 'divider',
            '&:last-child': { borderBottom: 0 },
          },
          '& tbody td': { py: 1.5, px: 2 },
          flexGrow: 1,
          overflow: 'auto',
        }}
      >
        <TableHead patients={patients || []} />
        <TableBody patients={patients || []} loading={isPending} />
      </Table>
      <PatientTablePagination
        page={page}
        take={take}
        total={total || 1}
        onPageChange={setPage}
        onTakeChange={(newTake: number) => {
          setTake(newTake);
          setPage(1);
        }}
      />
    </Sheet>
  );
};

export default PatientTable;
