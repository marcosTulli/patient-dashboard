export interface Patient {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  dob?: string;
  createdAt: Date
}

export interface Pagination {
  page: number;
  take?: number;
}

export enum Filters {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  phoneNumber = 'phoneNumber',
  dobFrom = 'dobFrom',
  dobTo = 'dobTo',
}
export interface PatientFilter extends Record<string, string | undefined> {
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

export enum SortFields {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  phoneNumber = 'phoneNumber',
  dob = 'dob',
  id = '_id',
  createdAt = 'createdAt'
}

export type SortFieldsType =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'dob'
  | '_id';

export interface PatientSort {
  field: SortFields;
  direction: SortDirection;
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

export interface DeletePatientsRequest {
  ids: string[];
}
