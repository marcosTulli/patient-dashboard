export interface NewPatient {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  dob?: string;
}
export interface PatientDto extends NewPatient {
  _id: string;
  createdAt: Date;
}
