'use client';
import { List, Divider, Box } from '@mui/material';
import { ActivityListItem } from './ActivityListItem';
import { useGetRecentActivity } from '../../../hooks';
import { HomeCard } from '../../HomeCard';

export function Activity() {
  const { activityList } = useGetRecentActivity();
  return (
    <HomeCard title={'Recent Activity'}>
      {' '}
      <List>
        {activityList.map(({ id, activityType, primary, secondary }, index) => {
          const isLast = index === activityList.length - 1;
          return (
            <Box key={id}>
              <ActivityListItem
                activityType={activityType}
                primary={primary}
                secondary={secondary}
              />
              {!isLast && <Divider component="li" />}
            </Box>
          );
        })}
      </List>
    </HomeCard>
  );
}
