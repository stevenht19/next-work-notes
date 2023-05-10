import dynamic from 'next/dynamic'
import { useState } from 'react'
import { HomeProps } from '@/pages'
import { Tabs, Tab, TabPanel } from '@/components/atoms/Tabs'
import { Typography } from '@/components/atoms/Typography'
import { Notes } from '@/components/views/Notes'
import { Weekend } from '@/components/views/Weekend'
import { Workgroup } from '@/components/views/Team'

const Reports = dynamic(() => import('@/components/views/Reports'), {
  loading: () => <Typography>Loading...</Typography>
})

export const HomeTabs = ({ notes }: HomeProps) => {

  const [value, setValue] = useState(0)

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
          Boolean(notes.length) && (
            <Notes notes={notes} />
          )
        }
      </TabPanel>
      <TabPanel index={1} value={value}>
        <Reports />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <Workgroup />
      </TabPanel>
      <TabPanel index={3} value={value}>
        <Weekend notes={notes} />
      </TabPanel>
    </>
  )
}
