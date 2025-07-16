import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationHandlers } from '../utils';
import { editPatientService } from '@/services/patients/editPatientService';
import useSelectedRowStore from '@/store/table/useSelectedRowStore';
import { Patient } from '@/models/patients';

// TODO Put this somewhere else
function formatDob(dob?: string | Date): string | undefined {
  if (!dob) return undefined;

  if (dob instanceof Date) {
    return dob.toISOString();
  }

  const parsedDate = new Date(dob);
  if (isNaN(parsedDate.getTime())) {
    return undefined;
  }
  return parsedDate.toISOString();
}


function formatBodyDob(body: Patient): Patient {
  return {
    ...body,
    dob: formatDob(body.dob),
  };
}

function useEditPatient() {
  const queryClient = useQueryClient();
  const { selectedRow } = useSelectedRowStore();

  const { onSuccess, onError } = mutationHandlers({
    queryClient,
    queryKey: ['patients'],
    toastId: 'edit-patient',
    successMessage: 'Successfully edited patient',
    errorMessage: 'Failed to edit patient',
  });

  const { mutateAsync: editPatient, isPending } = useMutation({

    mutationFn: (body: Patient) => {
      const formattedBody = formatBodyDob(body);
      return editPatientService(formattedBody, selectedRow._id);
    },

    onSuccess,
    onError,
  });

  return { editPatient, isPending };
}

export default useEditPatient;
