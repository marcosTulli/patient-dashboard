/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import type React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  Typography,
  Divider,
  Chip,
} from '@mui/joy';
import { Search, Plus, Filter, X, Trash2 } from 'lucide-react';
import type { PatientFilter } from '@/models/patients';
import { usePatientTableStore } from './store/usePatientTableStore';

const TableToolbar: React.FC = () => {
  const { filter, selectedRows, setFilter, clearSelection } =
    usePatientTableStore();

  const [showFilters, setShowFilters] = useState(false);
  const [localFilter, setLocalFilter] = useState<PatientFilter>(filter);
  const [_showCreateDialog, setShowCreateDialog] = useState(false);
  const [_showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleFilterChange = (field: keyof PatientFilter, value: string) => {
    const newFilter = { ...localFilter, [field]: value || undefined };
    setLocalFilter(newFilter);
  };

  const applyFilters = () => {
    setFilter(localFilter);
  };

  const clearFilters = () => {
    const emptyFilter: PatientFilter = {};
    setLocalFilter(emptyFilter);
    setFilter(emptyFilter);
  };

  const hasActiveFilters = Object.values(filter).some((value) => value);
  const hasSelectedRows = selectedRows.size > 0;

  return (
    <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
      {/* Main toolbar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: showFilters ? 2 : 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography level="h4">Patients</Typography>
          {hasActiveFilters && (
            <Chip
              size="sm"
              color="primary"
              variant="soft"
              endDecorator={
                <IconButton size="sm" variant="plain" onClick={clearFilters}>
                  <X size={14} />
                </IconButton>
              }
            >
              Filtered
            </Chip>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {hasSelectedRows && (
            <>
              <Typography level="body-sm" sx={{ mr: 1 }}>
                {selectedRows.size} selected
              </Typography>
              <Button
                size="sm"
                variant="soft"
                color="danger"
                startDecorator={<Trash2 size={16} />}
                onClick={() => setShowDeleteAlert(true)}
              >
                Delete Selected
              </Button>
              <Button size="sm" variant="plain" onClick={clearSelection}>
                Clear
              </Button>
              <Divider orientation="vertical" sx={{ mx: 1 }} />
            </>
          )}

          <IconButton
            variant={showFilters ? 'solid' : 'outlined'}
            color={showFilters ? 'primary' : 'neutral'}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
          </IconButton>

          <Button
            startDecorator={<Plus size={18} />}
            onClick={() => setShowCreateDialog(true)}
          >
            Add Patient
          </Button>
        </Box>
      </Box>

      {/* Filters section */}
      {showFilters && (
        <Box sx={{ bgcolor: 'background.level1', borderRadius: 'sm', p: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid xs={12} sm={6} md={3}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  placeholder="Search first name..."
                  value={localFilter.firstName || ''}
                  onChange={(e) =>
                    handleFilterChange('firstName', e.target.value)
                  }
                  startDecorator={<Search size={16} />}
                />
              </FormControl>
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  placeholder="Search last name..."
                  value={localFilter.lastName || ''}
                  onChange={(e) =>
                    handleFilterChange('lastName', e.target.value)
                  }
                  startDecorator={<Search size={16} />}
                />
              </FormControl>
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Search email..."
                  value={localFilter.email || ''}
                  onChange={(e) => handleFilterChange('email', e.target.value)}
                  startDecorator={<Search size={16} />}
                />
              </FormControl>
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  placeholder="Search phone..."
                  value={localFilter.phoneNumber || ''}
                  onChange={(e) =>
                    handleFilterChange('phoneNumber', e.target.value)
                  }
                  startDecorator={<Search size={16} />}
                />
              </FormControl>
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <FormControl>
                <FormLabel>Date of Birth From</FormLabel>
                <Input
                  type="date"
                  value={localFilter.dobFrom || ''}
                  onChange={(e) =>
                    handleFilterChange('dobFrom', e.target.value)
                  }
                />
              </FormControl>
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <FormControl>
                <FormLabel>Date of Birth To</FormLabel>
                <Input
                  type="date"
                  value={localFilter.dobTo || ''}
                  onChange={(e) => handleFilterChange('dobTo', e.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button size="sm" onClick={applyFilters}>
              Apply Filters
            </Button>
            <Button size="sm" variant="plain" onClick={clearFilters}>
              Clear All
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TableToolbar;
