'use client';
import { Typography, Paper, List } from '@mui/material';
import { Task } from './Task';
import { useGetTasks } from '../../../hooks';

export function DailyTasks() {
  const { tasks } = useGetTasks();
  return (
    <Paper sx={{ p: 3, flex: '1 1 300px' }}>
      <Typography variant="h6" gutterBottom>
        Daily Tasks
      </Typography>
      <List dense>
        {tasks.map((task) => (
          <Task key={task.primary} {...task} />
        ))}
      </List>
    </Paper>
  );
}
