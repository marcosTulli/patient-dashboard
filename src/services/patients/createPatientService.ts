import { Patient } from '@/models/patients';
import HttpClientInstance from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const createPatientService = (body: Patient) =>
  HttpClientInstance.post<Patient>({
    location: `${baseUrl}/patients/create`,
    body,
  });
