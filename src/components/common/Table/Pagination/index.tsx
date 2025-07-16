'use client';

import type React from 'react';
import { Box, IconButton, Select, Option, Typography } from '@mui/joy';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import { TablePaginationProps } from '@models/table';

const TablePagination: React.FC<TablePaginationProps> = ({
  total,
  page,
  take,
  setPage,
  setTake,
  itemName = 'items',
  pageSizeOptions = [5, 10, 25, 50],
}) => {
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
      setPage(1);
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
          Showing {startItem}-{endItem} of {total} {itemName}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography level="body-sm">Rows per page:</Typography>
          <Select
            value={take}
            onChange={handleTakeChange}
            size="sm"
            sx={{ minWidth: '80px' }}
          >
            {pageSizeOptions.map((size) => (
              <Option key={size} value={size}>
                {size}
              </Option>
            ))}
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
