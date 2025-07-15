// components/PatientTablePagination.tsx
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

export const PatientTablePagination: React.FC<PatientTablePaginationProps> = ({
  page,
  take,
  total,
  onPageChange,
  onTakeChange,
}) => {
  const totalPages = Math.ceil(total / take);
  const start = page * take + 1;
  const end = Math.min(start + take - 1, total);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      borderTop="1px solid"
      borderColor="divider"
    >
      <Typography level="body-sm">
        {start}–{end} of {total}
      </Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <Select
          size="sm"
          value={take.toString()}
          onChange={(_, val) => val && onTakeChange(Number(val))}
        >
          {[5, 10, 25, 50].map((size) => (
            <Option key={size} value={size.toString()}>
              {size} / page
            </Option>
          ))}
        </Select>

        <IconButton
          size="sm"
          disabled={page === 0}
          onClick={() => onPageChange(page - 1)}
        >
          <KeyboardArrowLeft />
        </IconButton>

        <IconButton
          size="sm"
          disabled={page >= totalPages - 1}
          onClick={() => onPageChange(page + 1)}
        >
          <KeyboardArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
};
