import dynamic from 'next/dynamic'
import { useState } from 'react'
import { HomeProps } from '@/pages'
import { Tabs, Tab, TabPanel } from '@/components/atoms/Tabs'
import { Typography } from '@/components/atoms/Typography'
import { Notes } from '@/components/views/Notes'

const Reports = dynamic(() => import('@/components/views/Reports'), {
  loading: () => <Typography>Loading...</Typography>
})

const Weekend = dynamic(() => import('@/components/views/Weekend'), {
  loading: () => <Typography>Loading...</Typography>
})

const Team = dynamic(() => import('@/components/views/Team'), {
  loading: () => <Typography>Loading...</Typography>
})

export const HomeTabs = ({ notes }: HomeProps) => {

  const [value, setValue] = useState<number>(0)

  const onChange = (index: number) => {
    setValue(index)
  }

  return (
    <>
      <Tabs
        value={value}
        onChange={onChange}
      >
        <Tab label='Notes' />
        <Tab label='Reports' />
        <Tab label='Team' />
        <Tab label='Weekend' />
      </Tabs>
      <TabPanel index={0} value={value}>
        {
          Boolean(notes?.length) ? (
            <Notes notes={notes} />
          ) : (
            <Typography color='text-zinc-400'>
              {`You haven't created any notes yet.`}
            </Typography>
          )
        }
      </TabPanel>
      <TabPanel index={1} value={value}>
        <Reports />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <Team />
      </TabPanel>
      <TabPanel index={3} value={value}>
        <Weekend notes={notes} />
      </TabPanel>
    </>
  )
}
