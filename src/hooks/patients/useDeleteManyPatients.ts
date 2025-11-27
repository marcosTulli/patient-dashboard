'use client';

import { deleteManyPatientsService } from '@/services/patients';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationHandlers } from '@/hooks/utils/mutationHandlers';

function useDeleteManyPatients() {
  const queryClient = useQueryClient();

  const { onSuccess, onError } = mutationHandlers({
    queryClient,
    queryKey: ['patients'],
    successMessage: 'Successfully deleted selected patients',
    errorMessage: 'Failed to delete selected patients',
  });

  const { mutateAsync: deleteManyPatients, isPending } = useMutation({
    mutationFn: deleteManyPatientsService,
    onSuccess,
    onError,
  });

  return { deleteManyPatients, isPending };
}

export default useDeleteManyPatients;
