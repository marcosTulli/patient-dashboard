import { type PatientDto } from '@/models/domain/patient/patientDto';
import { HttpClientInstance } from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const editPatientService = (body: PatientDto, id: string) => {
  return HttpClientInstance.patch<PatientDto>({
    location: `${baseUrl}/patients/${id}`,
    body,
  });
};
