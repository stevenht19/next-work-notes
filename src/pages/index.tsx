import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Note } from '@/models/Note'
import { ReportProvider } from '@/context/Report'
import { noteService } from '@/services/notes/notes.service'
import { HomeTabs } from '@/components/tabs/HomeTabs'
import { Actions } from '@/components/layout/Actions'
import { Header } from '@/components/layout/Header'
import { Main } from '@/components/layout/Main'

export type HomeProps = {
  notes: Note[]
}

export default function Home({ notes }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Main>
        <ReportProvider>
          <Actions />
          <HomeTabs notes={notes} />
        </ReportProvider>
      </Main>
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