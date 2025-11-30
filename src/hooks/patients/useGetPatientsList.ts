import { useQuery } from '@tanstack/react-query';
import { type PatientListRequest, type PatientListResponse } from '@/models/patients';
import { getPaginatedPatientsServiceService } from '@/services/patients';
import React from 'react';
import { usePatientTableStore } from '@/components/pages/patients-list/store/usePatientTableStore';
import { Patient } from '@/models/domain/patient';
import { queryKeys } from '@/config/queryKeys';

const useGetPatientsList = () => {
  const { page, take, filter, sort } = usePatientTableStore();
  const requestBody: PatientListRequest = React.useMemo(
    () => ({
      pagination: { page, take },
      filter: Object.keys(filter).length > 0 ? filter : null,
      sort: sort.field ? sort : null,
    }),
    [page, take, filter, sort],
  );

  const { data, error, isLoading, isFetching } = useQuery<PatientListResponse, Error>({
    queryKey: [queryKeys.patients, requestBody],
    queryFn: () => getPaginatedPatientsServiceService(requestBody),
  });

  const patients = data?.patients.map((patient) => Patient.FromJSON(patient));

  return {
    patients,
    total: data?.total,
    error,
    isLoading,
    isFetching,
  };
};

export default useGetPatientsList;
