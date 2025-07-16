'use client';

import type React from 'react';
import { TablePaginationProps } from '@models/table';

function usePagination({
  total,
  take,
  page,
  setPage,
  setTake,
}: TablePaginationProps) {
  const totalPages = Math.ceil(total / take);
  const startItem = (page - 1) * take + 1;
  const endItem = Math.min(page * take, total);
  const pageSizeOptions = [5, 10, 25, 50];

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

  return {
    endItem,
    startItem,
    totalPages,
    pageSizeOptions,
    handlePageChange,
    handleTakeChange,
  };
}

export default usePagination;
