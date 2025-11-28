import { HttpClientInstance } from '@/services/utils/httpClient';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const deletePatientService = (id: string) =>
  HttpClientInstance.delete({
    location: `${baseUrl}/patients/${id}`,
  });
