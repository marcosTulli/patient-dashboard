import { env } from '@/config/env';
import { type PatientListRequest, type PatientListResponse } from '@/models/patients';
import { HttpClientInstance } from '@/services/utils/httpClient';

export const getPaginatedPatientsServiceService = (body: PatientListRequest) =>
  HttpClientInstance.post<PatientListResponse>({
    location: `${env.patientsApiUrl}/patients/list`,
    body,
  });
