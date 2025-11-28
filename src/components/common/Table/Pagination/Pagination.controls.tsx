import { Box, IconButton, Typography } from '@mui/joy';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const PaginationControls: React.FC<Props> = ({ page, totalPages, onPageChange }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      flexWrap: { xs: 'wrap', sm: 'nowrap' },
    }}
  >
    <IconButton size="sm" variant="outlined" disabled={page === 1} onClick={() => onPageChange(1)}>
      <ChevronsLeft size={16} />
    </IconButton>

    <IconButton
      size="sm"
      variant="outlined"
      disabled={page === 1}
      onClick={() => onPageChange(page - 1)}
    >
      <ChevronLeft size={16} />
    </IconButton>

    <Typography
      level="body-sm"
      sx={{
        display: { xs: 'none', sm: 'inline-flex' },
        px: 1,
        whiteSpace: 'nowrap',
      }}
    >
      Page {page} of {totalPages}
    </Typography>

    <Typography
      level="body-xs"
      sx={{
        display: { xs: 'inline-flex', sm: 'none' },
        px: 1,
        minWidth: 50,
        textAlign: 'center',
      }}
    >
      {page}/{totalPages}
    </Typography>

    <IconButton
      size="sm"
      variant="outlined"
      disabled={page === totalPages}
      onClick={() => onPageChange(page + 1)}
    >
      <ChevronRight size={16} />
    </IconButton>

    <IconButton
      size="sm"
      variant="outlined"
      disabled={page === totalPages}
      onClick={() => onPageChange(totalPages)}
    >
      <ChevronsRight size={16} />
    </IconButton>
  </Box>
);

export default PaginationControls;
