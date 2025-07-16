import { PatientListRequest, PatientListResponse } from '@/models/patients';
import HttpClientInstance from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const getPaginatedPatientsServiceService = (body: PatientListRequest) =>
  HttpClientInstance.post<PatientListResponse>({
    location: `${baseUrl}/patients/list`,
    body,
  });
