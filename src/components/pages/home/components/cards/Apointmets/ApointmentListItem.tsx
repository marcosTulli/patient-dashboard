'use client';
import { ListItem, ListItemText, Chip } from '@mui/material';

interface ApointmentListItemProps {
  primary: string;
  secondary: string;
  chipLabel: string;
  isClose?: boolean;
}

export function ApointmentListItem({
  primary,
  secondary,
  chipLabel,
  isClose = false,
}: ApointmentListItemProps) {
  return (
    <ListItem disablePadding sx={{ my: 1.5 }}>
      <ListItemText primary={primary} secondary={secondary} />
      <Chip
        label={chipLabel}
        size="small"
        color={isClose ? 'warning' : 'default'}
        variant={isClose ? 'filled' : 'outlined'}
      />
    </ListItem>
  );
}
