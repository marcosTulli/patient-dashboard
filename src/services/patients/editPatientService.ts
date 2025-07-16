import { Patient } from '@/models/patients';
import HttpClientInstance from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const editPatientService = (body: Patient, id: string) =>{
  return HttpClientInstance.patch<Patient>({
    location: `${baseUrl}/patients/${id}`,
    body,
  });
};
