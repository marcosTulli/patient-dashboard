import { FormControl, FormLabel, Input } from '@mui/joy';
import React from 'react';
import { usePatientTableStore } from './store/usePatientTableStore';

const TableToolbar = () => {
  const { setFilter } = usePatientTableStore();
  return (
    <FormControl>
      <FormLabel>Email</FormLabel>
      <Input size="sm" onChange={(e) => setFilter({ email: e.target.value })} />
    </FormControl>
  );
};

export default TableToolbar;
