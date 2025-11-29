'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Box
        component="footer"
        sx={{
          bgcolor: 'background.paper',
          px: 2,
          py: 1,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Patients Dashboard
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
