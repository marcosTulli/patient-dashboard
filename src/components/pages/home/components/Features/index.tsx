'use client';
import { Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

export function Features() {
  return (
    <Paper sx={{ p: 3, flex: '1 1 300px' }}>
      <Typography variant="h6" gutterBottom>
        Features
      </Typography>
      <List dense>
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <SecurityIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Secure & Private"
            secondary="Your data is encrypted and protected"
          />
        </ListItem>
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <SpeedIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Fast & Intuitive" secondary="Designed for quick documentation" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <CloudSyncIcon color="primary" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Always Synced" secondary="Access your data from anywhere" />
        </ListItem>
      </List>
    </Paper>
  );
}
