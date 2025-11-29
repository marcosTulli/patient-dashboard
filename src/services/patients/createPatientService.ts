import { type NewPatient } from '@/models/domain/patient/patientDto';
import { HttpClientInstance } from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const createPatientService = (body: NewPatient) =>
  HttpClientInstance.post<NewPatient>({
    location: `${baseUrl}/patients/create`,
    body,
  });
