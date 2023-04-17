import { Note } from '@/models/Note.model'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

const supabase = createBrowserSupabaseClient()

class NoteService {
  async findNoteById(id: Note['id']) {
    try {
      const { data, error } = await supabase
        .from('notes')
        .select()
        .eq('id', id)

      if (error) {
        throw new Error(error.message)
      }

      return data
    } catch (err) {
      if (err instanceof Error)
      throw new Error(err.message)
    }
  }

  async createNote(note: Partial<Note>) {
    try {
      const { data, error } = await supabase
        .from('notes')
        .insert(note)

      if (error) {
        throw new Error(error.message)
      }

      return data
    } catch (err) {
      if (err instanceof Error)
        throw new Error(err.message)
    }
  }
}

export const noteService = new NoteService()
