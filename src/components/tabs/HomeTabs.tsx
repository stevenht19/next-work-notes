import { useState } from 'react'
import { Tabs, Tab, TabPanel } from '@/components/atoms/Tabs'
import { Notes } from '@/components/views/Notes'
import { Reports } from '@/components/views/Reports'
import { Weekend } from '@/components/views/Weekend'

export const HomeTabs = () => {

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
        <Notes />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <Reports />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <Weekend />
      </TabPanel>
    </>
  )
}
