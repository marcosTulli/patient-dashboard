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

export interface FilterField<T> {
  key: Extract<keyof T, string>;
  label: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'date';
  searchable?: boolean;
}

interface TableToolbarProps<TFilter extends object> {
  // <-- here
  title: React.ReactNode;
  filter: TFilter;
  setFilter: (filter: TFilter) => void;
  selectedRows: Set<string>;
  clearSelection: () => void;
  filterConfig: FilterField<TFilter>[];
  onAdd?: () => void;
  onDeleteSelected?: () => void;
}

const TableControls = <TFilter extends object>({
  title,
  filter,
  setFilter,
  selectedRows,
  clearSelection,
  filterConfig,
  onAdd,
  onDeleteSelected,
}: TableToolbarProps<TFilter>) => {
  const [showFilters, setShowFilters] = useState(false);
  const [localFilter, setLocalFilter] = useState<TFilter>(filter);

  const handleFilterChange = (
    field: Extract<keyof TFilter, string>,
    value: string,
  ) => {
    setLocalFilter((prev) => ({
      ...prev,
      [field]: value || undefined,
    }));
  };

  const applyFilters = () => {
    setFilter(localFilter);
  };

  const clearFilters = () => {
    const emptyFilter = Object.keys(filter).reduce((acc, key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (acc as any)[key] = undefined;
      return acc;
    }, {} as TFilter);
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
                <Grid xs={12} sm={6} md={3} key={key}>
                  <FormControl>
                    <FormLabel>{label}</FormLabel>
                    <Input
                      placeholder={placeholder}
                      type={type ?? 'text'}
                      value={String(localFilter[key] ?? '')}
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

export default TableControls;
