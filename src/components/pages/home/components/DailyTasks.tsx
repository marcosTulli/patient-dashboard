'use client';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from '@mui/material';

export function DailyTasks() {
  return (
    <Paper sx={{ p: 3, flex: '1 1 300px' }}>
      <Typography variant="h6" gutterBottom>
        Daily Tasks
      </Typography>
      <List dense>
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Checkbox edge="start" checked disabled size="small" />
          </ListItemIcon>
          <ListItemText
            primary="Complete session note for Sarah Johnson"
            secondary="Morning session"
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Checkbox edge="start" checked disabled size="small" />
          </ListItemIcon>
          <ListItemText
            primary="Review treatment plan for Michael Chen"
            secondary="Follow-up required"
          />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Checkbox edge="start" checked disabled size="small" />
          </ListItemIcon>
          <ListItemText primary="Create a session note" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Checkbox edge="start" disabled size="small" />
          </ListItemIcon>
          <ListItemText primary="Customize your settings" />
        </ListItem>
      </List>
    </Paper>
  );
}
