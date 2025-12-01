import { env } from '@/config/env';
import { type NewPatient } from '@/models/domain/patient/patientDto';
import { HttpClientInstance } from '@/services/utils/httpClient';

export const createPatientService = (body: NewPatient) =>
  HttpClientInstance.post<NewPatient>({
    location: `${env.patientsApiUrl}/patients/create`,
    body,
  });
