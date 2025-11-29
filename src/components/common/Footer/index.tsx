'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'background.paper',
      px: 2,
      pt: 1,
      mt: 'auto',
    }}
  >
    <Typography variant="body2" color="text.secondary">
      Patient Management
    </Typography>
  </Box>
);

export default Footer;
