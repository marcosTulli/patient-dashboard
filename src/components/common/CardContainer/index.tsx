'use client';

import { Box, Card, CardContent } from '@mui/joy';
import React, { PropsWithChildren } from 'react';

const CardContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      component="main"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="background.body"
      p={2}
    >
      <Card
        component="section"
        variant="outlined"
        role="region"
        aria-labelledby="access-card"
        sx={{
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.surface',
          minHeight: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

export default CardContainer;
