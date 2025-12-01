'use client';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { type ActivityType } from '../../utils';
import React from 'react';
import { ActivityIcon } from './ActivityIcon';

export interface ActivityListItemProps {
  id: string;
  primary: string;
  secondary: string;
  activityType: ActivityType;
}

export function ActivityListItem({
  primary,
  secondary,
  activityType,
}: Omit<ActivityListItemProps, 'id'>) {
  return (
    <ListItem disablePadding sx={{ mb: 2 }}>
      <ListItemIcon sx={{ minWidth: 44 }}>
        <ActivityIcon activityType={activityType} />
      </ListItemIcon>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );
}
