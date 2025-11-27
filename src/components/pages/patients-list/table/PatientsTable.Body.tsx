'use client';

import type React from 'react';
import TableBody from '@/components/common/Table/Body';
import { patientColumns } from '../config';
import usePatientsTable from '../hooks/usePatientsTable';

const PatientsTableBody: React.FC = () => {
  const {
    selectedRows,
    patients,
    isLoading,
    take,

    toggleRow,
    getRowId,
    openEditPatientDialog,
    handleDelete,
  } = usePatientsTable();

  return (
    <TableBody
      data={patients || []}
      isLoading={isLoading}
      selectedRows={selectedRows}
      toggleRow={toggleRow}
      getRowId={getRowId}
      columns={patientColumns}
      onEdit={openEditPatientDialog}
      onDelete={handleDelete}
      noDataMessage="No patients found"
      take={take}
    />
  );
};

export default PatientsTableBody;
