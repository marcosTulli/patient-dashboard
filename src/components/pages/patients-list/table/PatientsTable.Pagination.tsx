'use client';

import React from 'react';
import TablePagination from '@/components/common/Table/Pagination';
import usePatientsTable from '../hooks/usePatientsTable';

const PatientsTablePagination: React.FC = () => {
  const { page, take, total, setPage, setTake } = usePatientsTable();

  return (
    <TablePagination
      total={total || 0}
      page={page}
      take={take}
      setPage={setPage}
      setTake={setTake}
      itemName="Patients"
    />
  );
};

export default PatientsTablePagination;
