import { Note } from '@/models/Note'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

const supabase = createBrowserSupabaseClient()

class NoteService {

  async findNoteByUser(userId?: string) {
    try {

      if (!userId) {
        throw new Error('Non Authenticated')
      }

      const { data, error } = await supabase
        .from('notes')
        .select('id, title, created_at')
        .eq('user_id', userId)

      if (error) {
        throw new Error(error.message)
      }

      return data

    } catch (err) {
      if (err instanceof Error)
        throw new Error(err.message)
    }
  }

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

  async editNote(note: Partial<Note>) {
    try {
      const { error } = await supabase
        .from('notes')
        .update(note)
        .eq('id', note.id)

      if (error) {
        throw new Error(error.message)
      }
    } catch (err) {
      if (err instanceof Error)
        throw new Error(err.message)
    }
  }

  async deleteNote(noteId: Note['id']) {
    return supabase.from('notes')
      .delete()
      .eq('id', noteId)
  }

}

export const noteService = new NoteService()
