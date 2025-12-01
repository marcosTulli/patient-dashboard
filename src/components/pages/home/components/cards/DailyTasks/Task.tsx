'use client';
import { ListItem, ListItemIcon, ListItemText, Checkbox } from '@mui/material';

interface TaskProps {
  checked: boolean;
  primary: string;
  secondary: string;
}

export function Task({ checked, primary, secondary }: TaskProps) {
  return (
    <ListItem disablePadding>
      <ListItemIcon sx={{ minWidth: 36 }}>
        <Checkbox edge="start" checked={checked} disabled size="small" />
      </ListItemIcon>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  );
}
