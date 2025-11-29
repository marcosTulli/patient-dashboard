import { type PatientDto } from './patientDto';

export class Patient {
  #_id: string;
  #firstName: string;
  #lastName: string;
  #email: string;
  #phoneNumber?: string;
  #dob?: string;
  #createdAt?: Date;

  constructor(
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber?: string,
    dob?: string,
    createdAt?: Date,
  ) {
    this.#_id = _id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
    this.#phoneNumber = phoneNumber;
    this.#dob = dob;
    this.#createdAt = createdAt;
  }

  static FromJSON(json: PatientDto) {
    return new Patient(
      json._id,
      json.firstName,
      json.lastName,
      json.email,
      json.phoneNumber,
      json.dob,
      json.createdAt,
    );
  }

  id() {
    return this.#_id;
  }

  firstName() {
    return this.#firstName;
  }

  lastName() {
    return this.#lastName;
  }

  email() {
    return this.#email;
  }

  phoneNumber() {
    return this.#phoneNumber;
  }

  dob() {
    return this.#dob;
  }

  createdAt() {
    return this.#createdAt;
  }
}
