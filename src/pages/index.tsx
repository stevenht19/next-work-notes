import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { ReportProvider } from '@/context/Report'
import { HomeTabs } from '@/components/tabs/HomeTabs'
import { Actions } from '@/components/layout/Actions'
import { Note } from '@/models/Note'
import { noteService } from '@/services/notes/notes.service'
import { Header } from '@/components/layout/Header'

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
        <Actions />
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