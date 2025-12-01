'use client';
import { TitleSmall } from '@/components/common/Text/components';
import { Paper } from '@mui/material';

interface HomeCardProps extends React.PropsWithChildren {
  title: string;
}
export function HomeCard({ title, children }: HomeCardProps) {
  return (
    <Paper sx={{ p: 3, flex: '1 1 300px' }}>
      <TitleSmall sx={{ pb: 2 }}>{title}</TitleSmall>
      {children}
    </Paper>
  );
}
