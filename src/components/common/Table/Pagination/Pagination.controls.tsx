import { Box, IconButton, Typography } from '@mui/material';
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
    <IconButton
      size="small"
      disabled={page === 1}
      onClick={() => onPageChange(1)}
      sx={{ border: '1px solid', borderColor: 'divider' }}
    >
      <ChevronsLeft size={16} />
    </IconButton>

    <IconButton
      size="small"
      disabled={page === 1}
      onClick={() => onPageChange(page - 1)}
      sx={{ border: '1px solid', borderColor: 'divider' }}
    >
      <ChevronLeft size={16} />
    </IconButton>

    <Typography
      variant="body2"
      sx={{
        display: { xs: 'none', sm: 'inline-flex' },
        px: 1,
        whiteSpace: 'nowrap',
      }}
    >
      Page {page} of {totalPages}
    </Typography>

    <Typography
      variant="caption"
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
      size="small"
      disabled={page === totalPages}
      onClick={() => onPageChange(page + 1)}
      sx={{ border: '1px solid', borderColor: 'divider' }}
    >
      <ChevronRight size={16} />
    </IconButton>

    <IconButton
      size="small"
      disabled={page === totalPages}
      onClick={() => onPageChange(totalPages)}
      sx={{ border: '1px solid', borderColor: 'divider' }}
    >
      <ChevronsRight size={16} />
    </IconButton>
  </Box>
);

export default PaginationControls;
