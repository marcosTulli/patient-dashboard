'use client';
import React from 'react';
import TableToolbar from './TableToolbar';
import TableHead from './TableHead';
import TableBody from './TableBody';
import Sheet from '@mui/joy/Sheet';
import { PatientTablePagination } from './TablePagination';
import useList from './hooks/useList';
import { usePatientTableStore } from './store/usePatientTableStore';

export default function PatientTable() {
  const { page, take, filter, sort, setPage } = usePatientTableStore();
  const { patients, total, isPending } = useList({
    pagination: { page, take },
    filter,
    sort,
  });

  return (
    <Sheet variant="outlined" sx={{ borderRadius: 'md', overflow: 'hidden' }}>
      <TableToolbar />
      <table>
        <TableHead />
        <TableBody patients={patients || []} loading={isPending} />
      </table>
      <PatientTablePagination
        page={page}
        take={take}
        total={total as number}
        onPageChange={setPage}
        onTakeChange={setPage}
      />
    </Sheet>
  );
}
