'use client';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/config/queryKeys';
import { getPaginatedPatientsServiceService } from '@/services/patients';
import { useGetNotes } from '@/components/pages/session-notes/hooks/useGetNotes';

export function useStats() {
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

  const statsConfig = [
    { value: String(totalPatients), label: 'Total Patients', isLoading: patientsLoading },
    { value: String(totalNotes), label: 'Session Notes', isLoading: notesLoading },
    { value: String(totalHours), label: 'Hours Logged', isLoading: notesLoading },
    { value: '12', label: 'This Week', isLoading: false },
  ];

  return {
    statsConfig,
  };
}
