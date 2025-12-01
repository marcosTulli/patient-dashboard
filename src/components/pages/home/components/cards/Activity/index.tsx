'use client';
import { Typography, Paper, List, Divider, Box } from '@mui/material';
import { ActivityListItem } from './ActivityListItem';
import { useGetRecentActivity } from '../../../hooks';

export function Activity() {
  const { activityList } = useGetRecentActivity();
  return (
    <Paper sx={{ p: 3, flex: '2 1 400px' }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
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
    </Paper>
  );
}
