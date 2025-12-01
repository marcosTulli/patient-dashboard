import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationHandlers } from '../utils';
import { deletePatientService } from '@/services/patients';
import { queryKeys } from '@/config/queryKeys';

function useDeletePatient() {
  const queryClient = useQueryClient();

  const { onSuccess, onError } = mutationHandlers({
    queryClient,
    queryKey: [queryKeys.patients],
    successMessage: 'Successfully deleted patient',
    errorMessage: 'Failed to delete patient',
  });

  const { mutateAsync: deletePatient, isPending } = useMutation({
    mutationFn: deletePatientService,
    onSuccess,
    onError,
  });

  return { deletePatient, isPending };
}

export default useDeletePatient;
