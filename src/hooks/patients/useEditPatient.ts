import { useMutation, useQueryClient } from '@tanstack/react-query';
import { mutationHandlers } from '../utils';
import { editPatientService } from '@/services/patients/editPatientService';
import useSelectedRowStore from '@/store/table/useSelectedRowStore';
import { type PatientDto } from '@/models/domain/patient/patientDto';

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

function formatBodyDob(body: PatientDto): PatientDto {
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
    successMessage: 'Successfully edited patient',
    errorMessage: 'Failed to edit patient',
  });

  const { mutateAsync: editPatient, isPending } = useMutation({
    mutationFn: (body: PatientDto) => {
      const formattedBody = formatBodyDob(body);
      return editPatientService(formattedBody, selectedRow.id());
    },

    onSuccess,
    onError,
  });

  return { editPatient, isPending };
}

export default useEditPatient;
