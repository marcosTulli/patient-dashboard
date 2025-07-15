'use client';

import type React from 'react';
import { Box, IconButton, Select, Option, Typography } from '@mui/joy';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { usePatientTableStore } from './store/usePatientTableStore';

interface TablePaginationProps {
  total: number;
}

const TablePagination: React.FC<TablePaginationProps> = ({ total }) => {
  const { page, take, setPage, setTake } = usePatientTableStore();

  const totalPages = Math.ceil(total / take);
  const startItem = (page - 1) * take + 1;
  const endItem = Math.min(page * take, total);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleTakeChange = (
    _: React.SyntheticEvent | null,
    newValue: number | null,
  ) => {
    if (newValue) {
      setTake(newValue);
      setPage(1); // Reset to first page when changing page size
    }
  };

  if (total === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography level="body-sm">
          Showing {startItem}-{endItem} of {total} patients
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography level="body-sm">Rows per page:</Typography>
          <Select
            value={take}
            onChange={handleTakeChange}
            size="sm"
            sx={{ minWidth: '80px' }}
          >
            <Option value={5}>5</Option>
            <Option value={10}>10</Option>
            <Option value={25}>25</Option>
            <Option value={50}>50</Option>
            <Option value={100}>100</Option>
          </Select>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton
          size="sm"
          variant="outlined"
          disabled={page === 1}
          onClick={() => handlePageChange(1)}
        >
          <ChevronsLeft size={16} />
        </IconButton>

        <IconButton
          size="sm"
          variant="outlined"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          <ChevronLeft size={16} />
        </IconButton>

        <Typography level="body-sm" sx={{ mx: 2 }}>
          Page {page} of {totalPages}
        </Typography>

        <IconButton
          size="sm"
          variant="outlined"
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          <ChevronRight size={16} />
        </IconButton>

        <IconButton
          size="sm"
          variant="outlined"
          disabled={page === totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          <ChevronsRight size={16} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TablePagination;
