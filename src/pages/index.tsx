import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { HomeTabs } from '@/components/tabs/HomeTabs'
import { Button } from '@/components/buttons/AddButton'
import { Badge } from '@/components/atoms/Badge'
import { Typography } from '@/components/atoms/Typography'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
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
      <div className='flex items-center gap-4'>
        <Typography.h2>
          Welcome
        </Typography.h2>
        <Badge color='green' text='Workday' />
      </div>
      <div className='flex gap-6 pt-6 pb-8'>
        <Button path='/notes'>
          Quick Notes
        </Button>
        <Button path='/diary-report'>
          Diary Report
        </Button>
        <Button path='/notes'>
          Weekend Report
        </Button>
      </div>
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