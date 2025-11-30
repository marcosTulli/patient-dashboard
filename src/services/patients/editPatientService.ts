import { env } from '@/config/env';
import { type PatientDto } from '@/models/domain/patient/patientDto';
import { HttpClientInstance } from '@/services/utils/httpClient';

export const editPatientService = (body: PatientDto, id: string) => {
  return HttpClientInstance.patch<PatientDto>({
    location: `${env.patientsApiUrl}/patients/${id}`,
    body,
  });
};
