import { createPatientService } from '@/services/patients';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function useCreatePatient() {
  const queryClient = useQueryClient();
  const { mutateAsync: createPatient, isPending } = useMutation({
    mutationFn: createPatientService, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] });
      toast('Success Creating Patient', { toastId: 'create-patient', type: 'success' });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] });
      toast('Unable to create patient', { toastId: 'create-patient', type: 'error' });
    }
  });
  return { createPatient, isPending };
}

export default useCreatePatient;