import { type DeletePatientsRequest } from '@/models/patients';
import { HttpClientInstance } from '../utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const deleteManyPatientsService = (body: DeletePatientsRequest) =>
  HttpClientInstance.post<void>({
    location: `${baseUrl}/patients/delete`,
    body,
  });
