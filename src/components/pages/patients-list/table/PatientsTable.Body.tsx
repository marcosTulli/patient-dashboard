'use client';

import type React from 'react';
import TableBody from '@/components/common/Table/Body';
import { patientColumns } from '../config';
import usePatientsTable from '../hooks/usePatiensTable';

const PatientsTableBody: React.FC = () => {
  const {
    selectedRows,
    patients,
    isPending,
    toggleRow,
    getRowId,
    handleEdit,
    handleDelete,
  } = usePatientsTable();

  return (
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
  );
};

export default PatientsTableBody;
