import { createPatientService } from '@/services/patients';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationHandlers } from '../utils';
import { queryKeys } from '@/config/queryKeys';

function useCreatePatient() {
  const queryClient = useQueryClient();
  const { onSuccess, onError } = mutationHandlers({
    queryClient,
    queryKey: [queryKeys.patients],
    successMessage: 'Successfully created patient',
    errorMessage: 'Failed to create patient',
  });

  const { mutateAsync: createPatient, isPending } = useMutation({
    mutationFn: createPatientService,
    onSuccess,
    onError,
  });

  return { createPatient, isPending };
}

export default useCreatePatient;
