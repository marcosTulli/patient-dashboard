import useGetPatientsList from '@/hooks/patients/useGetPatientsList';
import { PatientListRequest } from '@/models/patients';

const useList = (body: PatientListRequest) => {
  const { patients, total, error, isLoading } = useGetPatientsList(body);

  return {
    patients,
    total,
    error,
    isPending: isLoading,
  };
};

export default useList;
