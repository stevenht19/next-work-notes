import { useState } from 'react'
import { Tabs, Tab, TabPanel } from '@/components/atoms/Tabs'
import { Reports } from '@/components/views/Reports'
import { Weekend } from '@/components/views/Weekend'
import { HomeProps } from '@/pages'
import { Grid } from '../atoms/Grid'
import { Note } from '../notes/Note'

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
            <Grid>
              {
                notes.map((note) => (
                  <Note key={note.id} {...note} />
                ))
              }
            </Grid>
          )
        }
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
