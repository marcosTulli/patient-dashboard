'use client';

import type React from 'react';
import TableControls from '@/components/common/Table/Controls';
import { filterConfig } from '../config';
import usePatientsTable from '../hooks/usePatiensTable';

const PatientsTableControls: React.FC = () => {
  const {
    selectedRows,
    filter,
    setFilter,
    clearSelection,
    handleAdd,
    handleDeleteSelected,
  } = usePatientsTable();

  return (
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
  );
};

export default PatientsTableControls;
