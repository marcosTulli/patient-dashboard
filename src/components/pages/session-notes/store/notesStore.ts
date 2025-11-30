import { create } from 'zustand';
import { Note } from '@/models/domain/note';
import { type NoteDTO } from '@/models/domain/note/noteDTO';

interface NotesState {
  notes: Note[];
  noteToDelete: string | null;
  addNote: (noteData: Omit<NoteDTO, 'id'>) => void;
  deleteNote: (id: string) => void;
  getNoteById: (id: string) => Note | undefined;
  setNoteToDelete: (id: string | null) => void;
}

export const notesStore = create<NotesState>((set, get) => ({
  notes: [],
  noteToDelete: null,

  setNoteToDelete: (id) => {
    set({ noteToDelete: id });
  },

  addNote: (noteData) => {
    const noteDTO: NoteDTO = {
      ...noteData,
      id: crypto.randomUUID(),
    };
    const newNote = Note.FromJSON(noteDTO);
    set((state) => ({ notes: [newNote, ...state.notes] }));
  },

  deleteNote: (id) => {
    set((state) => ({
      notes: state.notes.filter((note) => note.id() !== id),
    }));
  },

  getNoteById: (id) => {
    return get().notes.find((note) => note.id() === id);
  },
}));
