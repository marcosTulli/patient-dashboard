import { type DeletePatientsRequest } from '@/models/patients';
import { HttpClientInstance } from '../utils/httpClient';
import { env } from '@/config/env';

export const deleteManyPatientsService = (body: DeletePatientsRequest) =>
  HttpClientInstance.post<void>({
    location: `${env.patientsApiUrl}/patients/delete`,
    body,
  });
