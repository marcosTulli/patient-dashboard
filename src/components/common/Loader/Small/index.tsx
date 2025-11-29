import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const SmallLoader = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <CircularProgress size={40} aria-label="Loading" />
    </Box>
  );
};

export default SmallLoader;
