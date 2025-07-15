'use client';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Typography,
} from '@mui/joy';
import React from 'react';
import Clear from '@mui/icons-material/Clear';
import { usePatientTableStore } from './store/usePatientTableStore';

const TableToolbar = () => {
  const { setFilter, selectedRows, clearSelection } = usePatientTableStore();
  const [localFilters, setLocalFilters] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dobTo: '',
    dobFrom: '',
  });

  const clearFilters = () => {
    setLocalFilters({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dobTo: '',
      dobFrom: '',
    });
  };

  React.useEffect(() => {
    const handler = setTimeout(() => {
      const cleanedFilters = {
        ...localFilters,
        dobFrom: localFilters.dobFrom || undefined,
        dobTo: localFilters.dobTo || undefined,
      };
      setFilter(cleanedFilters);
    }, 300);
    return () => clearTimeout(handler);
  }, [localFilters, setFilter]);

  return (
    <Box
      sx={{
        p: 2,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        alignItems: 'center',
        bgcolor: 'background.level1',
      }}
      className="border-b border-gray-200"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography level="body-md" className="text-gray-600 font-semibold">
          Selected: {selectedRows.size}
        </Typography>
        {selectedRows.size > 0 && (
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            startDecorator={<Clear />}
            onClick={clearSelection}
            className="custom-button"
            sx={{ borderRadius: '8px' }}
          >
            Clear Selection
          </Button>
        )}
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(5, 1fr)',
          },
          gap: 2,
          width: { xs: '100%', sm: 'auto' },
        }}
      >
        {[
          { id: 'firstName', label: 'First Name' },
          { id: 'lastName', label: 'Last Name' },
          { id: 'email', label: 'Email' },
          { id: 'phoneNumber', label: 'Phone' },
          { id: 'dobFrom', label: 'DOB From', type: 'date' },
          { id: 'dobTo', label: 'DOB To', type: 'date' },
        ].map(({ id, label, type = 'text' }) => (
          <FormControl key={id} sx={{ minWidth: 120 }}>
            <FormLabel className="text-gray-700 font-medium">{label}</FormLabel>
            <Input
              size="sm"
              type={type}
              placeholder={`Filter by ${label}`}
              value={localFilters[id]}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, [id]: e.target.value })
              }
              className="border-gray-300 focus:ring-2 focus:ring-blue-300"
              sx={{ borderRadius: '8px' }}
            />
          </FormControl>
        ))}
      </Box>
      <Button
        size="sm"
        variant="soft"
        color="neutral"
        startDecorator={<Clear />}
        onClick={clearFilters}
        className="custom-button"
        sx={{ borderRadius: '8px' }}
      >
        Clear Filters
      </Button>
    </Box>
  );
};

export default TableToolbar;
