'use client';
import { List } from '@mui/material';
import { Task } from './Task';
import { useGetTasks } from '../../../hooks';
import { HomeCard } from '../../HomeCard';

export function DailyTasks() {
  const { tasks } = useGetTasks();
  return (
    <HomeCard title={'Daily Tasks'}>
      <List dense>
        {tasks.map((task) => (
          <Task key={task.primary} {...task} />
        ))}
      </List>
    </HomeCard>
  );
}
