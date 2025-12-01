import { queryKeys } from '@/config/queryKeys';
import usePatientSearchQuery from '@/hooks/shared/usePatientSearchQuery';
import { searchPatientsService } from '@/services/patients/searchPatientsService';
import { useQuery } from '@tanstack/react-query';

export default function useGetAllPatients() {
  const { debouncedQuery } = usePatientSearchQuery();
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.allPatients, debouncedQuery],
    queryFn: () => searchPatientsService(debouncedQuery),
    enabled: debouncedQuery.length > 1,
    retry: false,
  });

  const patients = data ?? [];
  return { patients, isLoading };
}
