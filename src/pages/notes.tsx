import { NoteForm } from '@/components/forms/notes'
import { NoteValues }  from '@/components/forms/notes/types'
import { noteService } from '@/services/notes/notes.service'
import { useUser } from '@supabase/auth-helpers-react'

export default function Notes() {
  const user = useUser()

  const onCreate = async (note: NoteValues) => {
    await noteService
      .createNote({ ...note, user_id: user!.id })
  }

  return (
    <>
      <NoteForm onSubmit={onCreate} />
    </>
  )
}
