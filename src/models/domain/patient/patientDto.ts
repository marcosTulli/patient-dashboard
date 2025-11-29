export interface PatientDto {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  dob?: string;
  createdAt: Date;
}
