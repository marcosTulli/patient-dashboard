import usegetPaginatedPatientsService from '@/hooks/patients/useGetPatientsList';
import { PatientListRequest } from '@/models/patients';

const useList = (body: PatientListRequest) => {
  const { patients, total, error, isLoading } =
    usegetPaginatedPatientsService(body);

  return {
    patients,
    total,
    error,
    isPending: isLoading,
  };
};

export default useList;
