'use client';

import { Box } from '@mui/joy';
import { type TablePaginationProps } from '@models/table';
import PaginationInfo from './Pagination.info';
import PageSizeSelect from './Pagination.select';
import PaginationControls from './Pagination.controls';
import { usePagination } from '@hooks/table';

const TablePagination: React.FC<TablePaginationProps> = ({
  total,
  page,
  take,
  setPage,
  setTake,
  itemName = 'items',
}) => {
  const { endItem, startItem, totalPages, pageSizeOptions, handlePageChange, handleTakeChange } =
    usePagination({ total, page, take, setPage, setTake });

  if (total === 0) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: 2,
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        {/* Hide on xs */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <PaginationInfo
            startItem={startItem}
            endItem={endItem}
            total={total}
            itemName={itemName}
          />
        </Box>

        <PageSizeSelect take={take} options={pageSizeOptions} onChange={handleTakeChange} />
      </Box>

      <PaginationControls page={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </Box>
  );
};

export default TablePagination;
