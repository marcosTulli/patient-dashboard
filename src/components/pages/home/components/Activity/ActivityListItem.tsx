'use client';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { ActivityIcon } from './ActivityIcon';
import { type RecentActivity } from '../../utils/recentActivity';

type ActivityListItemProps = Omit<RecentActivity, 'id'>;

export function ActivityListItem({ primary, secondary, activityType }: ActivityListItemProps) {
  return (
    <ListItem disablePadding sx={{ mb: 2 }}>
      <ListItemIcon sx={{ minWidth: 44 }}>
        <ActivityIcon activityType={activityType} />
      </ListItemIcon>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );
}
