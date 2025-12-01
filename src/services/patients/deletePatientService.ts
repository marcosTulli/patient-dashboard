import { env } from '@/config/env';
import { HttpClientInstance } from '@/services/utils/httpClient';

export const deletePatientService = (id: string) =>
  HttpClientInstance.delete({
    location: `${env.patientsApiUrl}/patients/${id}`,
  });
