import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { HomeTabs } from '@/components/tabs/HomeTabs'
import { Navbar } from '@/components/layout/Home/Navbar'
import { Note } from '@/models/Note.model'

export type HomeProps = {
  notes: Note[]
}

export default function Home({ notes }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <HomeTabs notes={notes} />
    </>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

  const supabase = createServerSupabaseClient(ctx)
  const { data: { user } } = await supabase.auth.getUser()

  const { data: notes } = await supabase
    .from('notes')
    .select()
    .eq('user_id', user!.id)

  return {
    props: {
      notes
    }
  }
}