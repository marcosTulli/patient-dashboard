'use client';
import React from 'react';
import { Box, Typography } from '@mui/joy';

const Footer = () => {
  return (
    <footer>
      <Box
        component="footer"
        sx={{
          bgcolor: 'background.surface',
          px: 2,
          py: 1,
        }}
      >
        <Typography level="body-sm" color="neutral">
          Patients Dashboard
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
