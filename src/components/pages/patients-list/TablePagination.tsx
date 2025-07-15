'use client';
// src/components/PatientTablePagination.tsx
import React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

interface PatientTablePaginationProps {
  page: number;
  take: number;
  total: number;
  onPageChange: (newPage: number) => void;
  onTakeChange: (newTake: number) => void;
}

const PatientTablePagination: React.FC<PatientTablePaginationProps> = ({
  page,
  take,
  total,
  onPageChange,
  onTakeChange,
}) => {
  const totalPages = Math.ceil(total / take);
  const start = (page - 1) * take + 1;
  const end = Math.min(start + take - 1, total);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        py: 1.5,
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.level1',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
      }}
      className="text-gray-600"
    >
      <Typography level="body-sm">
        {start}–{end} of {total}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Select
          size="sm"
          value={take.toString()}
          onChange={(_, val) => val && onTakeChange(Number(val))}
          sx={{ minWidth: 100, borderRadius: '8px' }}
          className="border-gray-300"
        >
          {[5, 10, 25, 50].map((size) => (
            <Option key={size} value={size.toString()}>
              {size} / page
            </Option>
          ))}
        </Select>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            size="sm"
            variant="soft"
            color="neutral"
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
            className="custom-button"
            aria-label="Previous page"
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            size="sm"
            variant="soft"
            color="neutral"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
            className="custom-button"
            aria-label="Next page"
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientTablePagination;
