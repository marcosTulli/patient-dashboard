import { Patient } from '@/models/domain/patient';
import { type PatientDto } from '@/models/domain/patient/patientDto';
import { HttpClientInstance } from '@/services/utils/httpClient';

export async function searchPatientsService(query: string, limit = 10): Promise<Patient[]> {
  const response = await HttpClientInstance.get<PatientDto[]>({
    location: '/patients/search',
    params: { q: query.trim(), limit },
  });

  const patients = response?.map((patient) => Patient.FromJSON(patient));
  return patients;
}
