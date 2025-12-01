'use client';
import { Typography, Paper, List, Divider, Box } from '@mui/material';
import { ApointmentListItem } from './ApointmentListItem';
import React from 'react';
import { useGetApointments } from '../../../hooks';

export function Apointments() {
  const { appointments } = useGetApointments();
  return (
    <Paper sx={{ p: 3, flex: '1 1 300px' }}>
      <Typography variant="h6" gutterBottom>
        Upcoming Sessions
      </Typography>
      <List dense>
        {appointments.map((appointment, index) => (
          <Box key={appointment.primary}>
            <ApointmentListItem {...appointment} />
            {index < appointments.length - 1 && <Divider component="li" />}
          </Box>
        ))}
      </List>
    </Paper>
  );
}
