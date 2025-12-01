'use client';

import { Box, Typography, Paper } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

export function Tips() {
  return (
    <Paper sx={{ p: 3, flex: '1 1 300px', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <TipsAndUpdatesIcon />
        <Typography variant="h6">Pro Tip</Typography>
      </Box>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Use keyboard shortcuts to speed up your workflow! Press <strong>Ctrl+N</strong> to quickly
        create a new session note, or <strong>Ctrl+P</strong> to search for patients.
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        Check out Settings → Keyboard Shortcuts for the full list.
      </Typography>
    </Paper>
  );
}
