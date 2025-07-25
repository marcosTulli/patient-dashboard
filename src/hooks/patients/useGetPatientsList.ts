import { useQuery } from '@tanstack/react-query';
import { PatientListRequest, PatientListResponse } from '@/models/patients';
import { getPaginatedPatientsServiceService } from '@/services/patients';

const useGetPatientsList = (body: PatientListRequest) => {
  const { data, error, isLoading } = useQuery<PatientListResponse, Error>({
    queryKey: ['patients', body],
    queryFn: () => getPaginatedPatientsServiceService(body),
  });

  return {
    patients: data?.patients,
    total: data?.total,
    error,
    isLoading,
  };
};

export default useGetPatientsList;
