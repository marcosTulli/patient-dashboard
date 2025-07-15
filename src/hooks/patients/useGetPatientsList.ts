import { useMutation } from '@tanstack/react-query';
import { getPatientsList } from '@/services/patients';
import { PatientListRequest, PatientListResponse } from '@/models/patients';

const usePatientsList = () => {
  const { mutateAsync, data, error, isPending, isError, reset } = useMutation<
    PatientListResponse,
    Error,
    PatientListRequest
  >({
    mutationFn: getPatientsList,
  });

  return {
    mutateAsync,
    data,
    error,
    isPending,
    isError,
    reset,
  };
};

export default usePatientsList;
