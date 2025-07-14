import { Box, CircularProgress } from '@mui/joy';
import React from 'react';

const SmallLoader = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <CircularProgress size="lg" aria-label="Loading" />
    </Box>
  );
};

export default SmallLoader;
