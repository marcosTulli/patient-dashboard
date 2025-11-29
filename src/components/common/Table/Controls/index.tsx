import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Grid,
  IconButton,
  Typography,
  Divider,
  Chip,
  InputAdornment,
} from '@mui/material';
import { Search, Filter, X, Trash2 } from 'lucide-react';
import { type TableToolbarProps } from '@/models/table';
import { useUser } from '@/hooks/auth';

const TableControls = <TFilter extends object>({
  title,
  filter,
  filterConfig,
  selectedRows,
  renderAddDialog,
  setFilter,
  clearSelection,
  onDeleteSelected,
}: TableToolbarProps<TFilter>) => {
  const [showFilters, setShowFilters] = useState(false);
  const [localFilter, setLocalFilter] = useState<TFilter>(filter);

  const { user } = useUser();

  const handleFilterChange = (field: Extract<keyof TFilter, string>, value: string) => {
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
          <Typography variant="h5">{title}</Typography>
          {hasActiveFilters && (
            <Chip
              size="small"
              color="primary"
              label="Filtered"
              onDelete={clearFilters}
              deleteIcon={<X size={14} />}
            />
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {hasSelectedRows && (
            <>
              <Typography variant="body2" sx={{ mr: 1 }}>
                {selectedRows.size} selected
              </Typography>
              {onDeleteSelected && (
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  startIcon={<Trash2 size={16} />}
                  onClick={() => onDeleteSelected({ selectedRows })}
                >
                  Delete Selected
                </Button>
              )}
              <Button size="small" variant="text" onClick={clearSelection}>
                Clear
              </Button>
              <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            </>
          )}

          <IconButton
            color={showFilters ? 'primary' : 'default'}
            onClick={() => setShowFilters(!showFilters)}
            sx={{
              border: '1px solid',
              borderColor: showFilters ? 'primary.main' : 'divider',
            }}
          >
            <Filter size={18} />
          </IconButton>

          {renderAddDialog && user?.isAuthorized && renderAddDialog}
        </Box>
      </Box>

      {showFilters && (
        <Box sx={{ bgcolor: 'action.hover', borderRadius: 1, p: 2 }}>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {filterConfig.map(({ key, label, placeholder, type, searchable }) => (
              <Grid item xs={12} sm={6} md={3} key={key}>
                <FormControl fullWidth size="small">
                  <InputLabel shrink>{label}</InputLabel>
                  <TextField
                    placeholder={placeholder}
                    type={type ?? 'text'}
                    value={String(localFilter[key] ?? '')}
                    onChange={(e) => handleFilterChange(key, e.target.value)}
                    size="small"
                    InputProps={{
                      startAdornment: searchable ? (
                        <InputAdornment position="start">
                          <Search size={16} />
                        </InputAdornment>
                      ) : undefined,
                    }}
                  />
                </FormControl>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button size="small" variant="contained" onClick={applyFilters}>
              Apply Filters
            </Button>
            <Button size="small" variant="text" onClick={clearFilters}>
              Clear All
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TableControls;
