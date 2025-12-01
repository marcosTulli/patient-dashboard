'use client';

import { useMemo } from 'react';
import { type PatientListRequest } from '@/models/patients';
import { usePatientTableStore } from '../store/usePatientTableStore';
import useDeleteManyPatients from '@/hooks/patients/useDeleteManyPatients';
import useDialogs from '@/hooks/overlays/useDialogs';
import useSelectedRowStore from '@/store/table/useSelectedRowStore';
import useGetPatientsList from '@/hooks/patients/useGetPatientsList';
import { type Patient } from '@/models/domain/patient';

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

  const { patients, total, error, isLoading, isFetching } = useGetPatientsList();
  const { deleteManyPatients } = useDeleteManyPatients();
  const { toggleEditDialog, toggleDeleteDialog } = useDialogs();
  const { setSelectedRow } = useSelectedRowStore();

  const getRowId = (patient: Patient) => patient.id();

  const openEditPatientDialog = (row: Patient) => {
    toggleEditDialog();
    setSelectedRow(row);
  };

  const handleDelete = (row: Patient) => {
    setSelectedRow(row);
    toggleDeleteDialog();
  };

  const handleDeleteSelected = ({ selectedRows }: { selectedRows: Set<string> }) => {
    const requestBody = { ids: Array.from(selectedRows) };
    deleteManyPatients(requestBody);
    clearSelection();
  };

  return {
    patients,
    total,
    error,
    isLoading: isLoading || isFetching,
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
    openEditPatientDialog,
    handleDelete,
    getRowId,
  };
}

export default usePatientsTable;
