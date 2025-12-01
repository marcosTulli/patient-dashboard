'use client';
import { Box, Typography, Paper, Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/config/queryKeys';
import { getPaginatedPatientsServiceService } from '@/services/patients';
import { useGetNotes } from '@/components/pages/session-notes/hooks/useGetNotes';

export function Stats() {
  const { data: patientsData, isLoading: patientsLoading } = useQuery({
    queryKey: [queryKeys.patients, 'dashboard-count'],
    queryFn: () =>
      getPaginatedPatientsServiceService({
        pagination: { page: 1, take: 1 },
      }),
  });

  const { notes, isLoading: notesLoading } = useGetNotes();

  const totalPatients = patientsData?.total ?? 0;
  const totalNotes = notes?.length ?? 0;
  const totalHours = Math.round(
    (notes?.reduce((acc, note) => acc + note.sessionDuration(), 0) ?? 0) / 60,
  );

  return (
    <Box sx={{ display: 'flex', gap: 3, mb: 5, flexWrap: 'wrap' }}>
      <Paper sx={{ p: 3, flex: '1 1 180px', textAlign: 'center' }}>
        {patientsLoading ? (
          <Skeleton variant="text" width={60} height={50} sx={{ mx: 'auto' }} />
        ) : (
          <Typography variant="h3" color="primary.main">
            {totalPatients}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          Total Patients
        </Typography>
      </Paper>
      <Paper sx={{ p: 3, flex: '1 1 180px', textAlign: 'center' }}>
        {notesLoading ? (
          <Skeleton variant="text" width={60} height={50} sx={{ mx: 'auto' }} />
        ) : (
          <Typography variant="h3" color="primary.main">
            {totalNotes}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          Session Notes
        </Typography>
      </Paper>
      <Paper sx={{ p: 3, flex: '1 1 180px', textAlign: 'center' }}>
        {notesLoading ? (
          <Skeleton variant="text" width={60} height={50} sx={{ mx: 'auto' }} />
        ) : (
          <Typography variant="h3" color="primary.main">
            {totalHours}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          Hours Logged
        </Typography>
      </Paper>
      <Paper sx={{ p: 3, flex: '1 1 180px', textAlign: 'center' }}>
        <Typography variant="h3" color="success.main">
          12
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This Week
        </Typography>
      </Paper>
    </Box>
  );
}
