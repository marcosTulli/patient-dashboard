import { type NoteDTO } from './noteDTO';

export class Note {
  #id: string;
  #client_name: string;
  #session_date: Date;
  #quick_notes: string;
  #session_duration: number;

  constructor(
    id: string,
    client_name: string,
    session_date: Date,
    quick_notes: string,
    session_duration: number,
  ) {
    this.#id = id;
    this.#client_name = client_name;
    this.#session_date = session_date;
    this.#quick_notes = quick_notes;
    this.#session_duration = session_duration;
  }

  static FromJSON(json: NoteDTO) {
    return new Note(
      json.id,
      json.client_name,
      new Date(json.session_date),
      json.quick_notes,
      json.session_duration,
    );
  }

  id() {
    return this.#id;
  }

  clientName() {
    return this.#client_name;
  }

  sessionDate() {
    return this.#session_date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  quickNotes() {
    return this.#quick_notes;
  }

  sessionDuration() {
    return this.#session_duration;
  }
}
