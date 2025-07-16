'use client';

import { useMemo } from 'react';
import { type Patient, type PatientListRequest } from '@/models/patients';
import useList from './useList';
import { usePatientTableStore } from '../store/usePatientTableStore';
import useDeleteManyPatients from '@/hooks/patients/useDeleteManyPatients';

function usePatientsTable() {
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
    clearSelection,
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
  const {deleteManyPatients} = useDeleteManyPatients();



  const getRowId = (patient: Patient) => patient._id;
  const handleEdit = (row: Patient) => {
    console.log('EDIT', row);
  };

  const handleDelete = (row: Patient) => {
    console.log('DELETE', row);
  };

  const handleDeleteSelected = ({selectedRows}: {selectedRows: Set<string>}) => {
    const requestBody = {ids: Array.from(selectedRows)};
    deleteManyPatients(requestBody);
  };

  return {
    patients,
    total,
    error,
    isPending,
    page,
    filter,
    take,
    sort,
    selectedRows,
    requestBody,
    setFilter,
    setSort,
    toggleRow,
    toggleSelectAll,
    setPage,
    setTake,
    clearSelection,
    handleDeleteSelected,
    handleEdit,
    handleDelete,
    getRowId,
  };
}

export default usePatientsTable;
