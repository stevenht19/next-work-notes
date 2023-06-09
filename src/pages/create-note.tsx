import Head from 'next/head'
import { NoteForm } from '@/components/forms/notes'
import { NoteValues } from '@/components/forms/notes/types'
import { noteService } from '@/services/notes/notes.service'
import { useUser } from '@supabase/auth-helpers-react'
import { Main } from '@/components/layout/Main'
import { Header } from '@/components/layout/Header'

export default function Notes() {

  const user = useUser()

  const onCreate = async (note: NoteValues) => {
    await noteService
      .createNote({ ...note, user_id: user!.id })
  }

  return (
    <>
      <Head>
        <title>
          Create Note
        </title>
      </Head>
      <Header />
      <Main>
        <NoteForm onSubmit={onCreate} />
      </Main>
    </>
  )
}
