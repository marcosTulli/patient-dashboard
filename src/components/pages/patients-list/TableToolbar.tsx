import React, { useState } from 'react';
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
import { PatientFilter } from '@/models/patients';

export interface FilterField<T> {
  key: keyof T;
  label: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'date';
  searchable?: boolean;
}

interface TableToolbarProps {
  title: React.ReactNode;
  filter: PatientFilter;
  setFilter: (filter: PatientFilter) => void;
  selectedRows: Set<string | number>;
  clearSelection: () => void;
  filterConfig: FilterField<PatientFilter>[];
  onAdd?: () => void;
  onDeleteSelected?: () => void;
}

const TableToolbar: React.FC<TableToolbarProps> = ({
  title,
  filter,
  setFilter,
  selectedRows,
  clearSelection,
  filterConfig,
  onAdd,
  onDeleteSelected,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [localFilter, setLocalFilter] = useState<PatientFilter>(filter);

  const handleFilterChange = (field: keyof PatientFilter, value: string) => {
    setLocalFilter((prev) => ({ ...prev, [field]: value || undefined }));
  };

  const applyFilters = () => {
    setFilter(localFilter);
  };

  const clearFilters = () => {
    const emptyFilter: PatientFilter = {};
    setLocalFilter(emptyFilter);
    setFilter(emptyFilter);
  };

  const hasActiveFilters = Object.values(filter).some(Boolean);
  const hasSelectedRows = selectedRows.size > 0;

  return (
    <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: showFilters ? 2 : 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography level="h4">{title}</Typography>
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
              {onDeleteSelected && (
                <Button
                  size="sm"
                  variant="soft"
                  color="danger"
                  startDecorator={<Trash2 size={16} />}
                  onClick={onDeleteSelected}
                >
                  Delete Selected
                </Button>
              )}
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

          {onAdd && (
            <Button startDecorator={<Plus size={18} />} onClick={onAdd}>
              Add
            </Button>
          )}
        </Box>
      </Box>

      {showFilters && (
        <Box sx={{ bgcolor: 'background.level1', borderRadius: 'sm', p: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {filterConfig.map(
              ({ key, label, placeholder, type, searchable }) => (
                <Grid xs={12} sm={6} md={3} key={String(key)}>
                  <FormControl>
                    <FormLabel>{label}</FormLabel>
                    <Input
                      placeholder={placeholder}
                      type={type ?? 'text'}
                      value={(localFilter[key] as string) ?? ''}
                      onChange={(e) => handleFilterChange(key, e.target.value)}
                      startDecorator={
                        searchable ? <Search size={16} /> : undefined
                      }
                    />
                  </FormControl>
                </Grid>
              ),
            )}
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
