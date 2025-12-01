'use client';
import { Typography, Paper, List, ListItem, ListItemText, Chip, Divider } from '@mui/material';

export function Sessions() {
  return (
    <Paper sx={{ p: 3, flex: '1 1 300px' }}>
      <Typography variant="h6" gutterBottom>
        Upcoming Sessions
      </Typography>
      <List dense>
        <ListItem disablePadding sx={{ mb: 1.5 }}>
          <ListItemText primary="Sarah Johnson" secondary="Today · 4:00 PM" />
          <Chip label="In 2 hours" size="small" color="warning" />
        </ListItem>
        <Divider component="li" />
        <ListItem disablePadding sx={{ my: 1.5 }}>
          <ListItemText primary="James Thompson" secondary="Tomorrow · 10:00 AM" />
          <Chip label="Tomorrow" size="small" variant="outlined" />
        </ListItem>
        <Divider component="li" />
        <ListItem disablePadding sx={{ my: 1.5 }}>
          <ListItemText primary="Lisa Anderson" secondary="Thu, Dec 5 · 2:30 PM" />
          <Chip label="Thu" size="small" variant="outlined" />
        </ListItem>
        <Divider component="li" />
        <ListItem disablePadding sx={{ mt: 1.5 }}>
          <ListItemText primary="Robert Kim" secondary="Fri, Dec 6 · 11:00 AM" />
          <Chip label="Fri" size="small" variant="outlined" />
        </ListItem>
      </List>
    </Paper>
  );
}
