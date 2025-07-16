import { createPatientService } from '@/services/patients';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationHandlers } from '../utils';


function useCreatePatient() {
  const queryClient = useQueryClient();
    const { onSuccess, onError } = mutationHandlers({
    queryClient,
    queryKey: ['patients'],
    toastId: 'create-patient',
    successMessage: 'Successfully created patient',
    errorMessage: 'Failed to create patient',
  });

  const { mutateAsync: createPatient, isPending } = useMutation({
    mutationFn: createPatientService,
    onSuccess, 
    onError
  });
  return { createPatient, isPending };
}

export default useCreatePatient;
