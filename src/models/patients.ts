export interface Patient {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  dob?: string;
}

export interface Pagination {
  page: number;
  take?: number;
}

export interface PatientFilter {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  dobFrom?: string;
  dobTo?: string;
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface PatientSort {
  field?: 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'dob' | '_id';
  direction?: SortDirection;
}

export interface PatientListRequest {
  pagination: Pagination;
  filter?: PatientFilter | null;
  sort?: PatientSort | null;
}

export interface PatientListResponse {
  patients: Patient[];
  total: number;
}
