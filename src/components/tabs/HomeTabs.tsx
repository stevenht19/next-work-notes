import { useState } from 'react'
import { HomeProps } from '@/pages'
import { Reports } from '@/components/views/Reports'
import { Notes } from '@/components/views/Notes'
import { Tabs, Tab, TabPanel } from '@/components/atoms/Tabs'

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
        aaaaa
      </TabPanel>
    </>
  )
}
