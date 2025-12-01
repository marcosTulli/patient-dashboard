'use client';
import { routes } from '@/config/routes';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import PeopleIcon from '@mui/icons-material/People';
import NotesIcon from '@mui/icons-material/Notes';

export function HomeNavigation() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Quick Actions
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, mb: 5, flexWrap: 'wrap' }}>
        <Card sx={{ width: 240 }}>
          <CardActionArea component={Link} href={routes.patientsList}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <PeopleIcon sx={{ fontSize: 48, mb: 1, color: 'primary.main' }} />
              <Typography variant="h6">Patients</Typography>
              <Typography variant="body2" color="text.secondary">
                View and manage patients
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 240 }}>
          <CardActionArea component={Link} href={routes.sessionNotes}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <NotesIcon sx={{ fontSize: 48, mb: 1, color: 'primary.main' }} />
              <Typography variant="h6">Session Notes</Typography>
              <Typography variant="body2" color="text.secondary">
                View and manage notes
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
}
