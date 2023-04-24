import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { HomeTabs } from '@/components/tabs/HomeTabs'
import { Navbar } from '@/components/layout/Home/Navbar'
import { Note } from '@/models/Note.model'
import { noteService } from '@/services/notes/notes.service'
import { ReportProvider } from '@/context/Report'

export type HomeProps = {
  notes: Note[]
}

export default function Home({ notes }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ReportProvider>
        <Navbar />
        <HomeTabs notes={notes} />
      </ReportProvider>
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

  const supabase = createServerSupabaseClient(ctx)
  const { data: { user } } = await supabase.auth.getUser()

  const notes = await noteService.findNoteByUser(user?.id)

  return {
    props: {
      notes
    }
  }
}