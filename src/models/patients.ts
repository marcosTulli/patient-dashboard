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


export enum Filters { 
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  phoneNumber = 'phoneNumber',
  dobFrom = 'dobFrom',
  dobTo = 'dobTo',

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

export enum SortFields { 
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  phoneNumber = 'phoneNumber',
  dob = 'dob',

}

export interface PatientSort {
  field?: SortFields;
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
