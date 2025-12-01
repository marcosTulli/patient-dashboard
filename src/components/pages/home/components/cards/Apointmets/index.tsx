'use client';
import { List, Divider, Box } from '@mui/material';
import { ApointmentListItem } from './ApointmentListItem';
import React from 'react';
import { useGetApointments } from '../../../hooks';
import { HomeCard } from '../../HomeCard';

export function Apointments() {
  const { appointments } = useGetApointments();
  return (
    <HomeCard title={'Upcoming Apointments'}>
      <List dense>
        {appointments.map((appointment, index) => (
          <Box key={appointment.primary}>
            <ApointmentListItem {...appointment} />
            {index < appointments.length - 1 && <Divider component="li" />}
          </Box>
        ))}
      </List>
    </HomeCard>
  );
}
