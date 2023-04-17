import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { Note } from '@/models/Note.model'
import { NoteForm } from '@/components/forms/notes'
import { noteService } from '@/services/notes/notes.service'
import { NoteValues } from '@/components/forms/notes/types'

type Props = {
  notes: Note[]
}

export default function Note({ notes }: Props) {

  const note = notes[0]

  const onSubmit = async (values: NoteValues) => {
    console.log(values)
  }

  return (
    <>
      <Head>
        <title>Note | {note.title}</title>
      </Head>
      <NoteForm
        initialValues={note}
        onSubmit={onSubmit}
      />
    </>
  )
}


export async function getServerSideProps(ctx: GetServerSidePropsContext) {

  const { query } = ctx

  const notes = await noteService.findNoteById(Number(query.id))

  return {
    props: {
      notes
    }
  }
}