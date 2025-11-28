'use client';

import type React from 'react';
import TableHead from '@/components/common/Table/Head';
import { patientColumns } from '../config';
import usePatientsTable from '../hooks/usePatientsTable';
import { type Patient, type SortFields } from '@/models/patients';

const PatientsTableHead: React.FC = () => {
  const { sort, selectedRows, patients, setSort, toggleSelectAll, getRowId } = usePatientsTable();

  return (
    <TableHead<Patient, SortFields>
      data={patients || []}
      selectedRows={selectedRows}
      toggleSelectAll={toggleSelectAll}
      sort={sort}
      setSort={setSort}
      columns={patientColumns}
      getRowId={getRowId}
    />
  );
};

export default PatientsTableHead;
