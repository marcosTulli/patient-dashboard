'use client';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditNoteIcon from '@mui/icons-material/EditNote';
import EventIcon from '@mui/icons-material/Event';

export function Activity() {
  return (
    <Paper sx={{ p: 3, flex: '2 1 400px' }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        <ListItem disablePadding sx={{ mb: 2 }}>
          <ListItemIcon sx={{ minWidth: 44 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              <EditNoteIcon fontSize="small" />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Session note added for Sarah Johnson"
            secondary="Today at 2:45 PM · 45 min session"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem disablePadding sx={{ my: 2 }}>
          <ListItemIcon sx={{ minWidth: 44 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'success.main' }}>
              <PersonAddIcon fontSize="small" />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="New patient added: Michael Chen" secondary="Today at 11:30 AM" />
        </ListItem>
        <Divider component="li" />
        <ListItem disablePadding sx={{ my: 2 }}>
          <ListItemIcon sx={{ minWidth: 44 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
              <EditNoteIcon fontSize="small" />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Session note added for Emma Wilson"
            secondary="Yesterday at 4:15 PM · 60 min session"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem disablePadding sx={{ mt: 2 }}>
          <ListItemIcon sx={{ minWidth: 44 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'info.main' }}>
              <EventIcon fontSize="small" />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            primary="Updated contact info for David Martinez"
            secondary="Yesterday at 10:00 AM"
          />
        </ListItem>
      </List>
    </Paper>
  );
}
