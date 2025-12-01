import { Avatar } from '@mui/material';
import React from 'react';
import { activityColorMap, type ActivityType } from '../../../utils';
import { activityIconMap } from '../../../utils/activityIconMap';

interface ActivityIconProps {
  activityType: ActivityType;
}

export function ActivityIcon({ activityType }: ActivityIconProps) {
  const Icon = activityIconMap[activityType];

  return (
    <Avatar sx={{ width: 32, height: 32, bgcolor: activityColorMap[activityType] }}>
      <Icon fontSize="small" />
    </Avatar>
  );
}
