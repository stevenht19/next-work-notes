import { Note } from '@/models/Note.model'

export type Props = {
  initialValues?: NoteValues
  onSubmit: (note: NoteValues) => Promise<void>
}

export type NoteValues = Partial<Note>
