'use client';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  LinearProgress,
} from '@mui/material';

export function GettingStarted() {
  return (
    <Paper sx={{ p: 3, flex: '1 1 300px' }}>
      <Typography variant="h6" gutterBottom>
        Getting Started
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Profile completion</Typography>
          <Typography variant="body2" color="primary">
            75%
          </Typography>
        </Box>
        <LinearProgress variant="determinate" value={75} />
      </Box>
      <List dense>
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Checkbox edge="start" checked disabled size="small" />
          </ListItemIcon>
          <ListItemText primary="Create your account" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Checkbox edge="start" checked disabled size="small" />
          </ListItemIcon>
          <ListItemText primary="Add your first patient" />
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
