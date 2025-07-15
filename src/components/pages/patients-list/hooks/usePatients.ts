// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { PatientListRequest, PatientListResponse } from '@models/patients';
// import { getPatients, createPatient, updatePatient, deletePatient } from '@/services/patientService';

// export function usePatients(request: PatientListRequest) {
//   return useQuery<PatientListResponse>({
//     queryKey: ['patients', request],
//     queryFn: () => getPatients(request),
//     keepPreviousData: true,
//   });
// }

// export function useCreatePatient() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: createPatient,
//     onSuccess: () => queryClient.invalidateQueries(['patients']),
//   });
// }

// export function useUpdatePatient() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: updatePatient,
//     onSuccess: () => queryClient.invalidateQueries(['patients']),
//   });
// }

// export function useDeletePatient() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: deletePatient,
//     onSuccess: () => queryClient.invalidateQueries(['patients']),
//   });
// }
