import { RiStickyNoteLine } from 'react-icons/ri'
import { Grid } from '@/components/atoms/Grid'
import { Card } from '@/components/atoms/Card'
import { HomeProps } from '@/pages'

export const Notes = ({ notes }: HomeProps) => {
  return (
    <Grid
      items={notes}
      renderItem={(props) => (
        <Card
          title={props.title}
          id={props.id}
          key={props.id}
          created_at={props.created_at}
          path='/note'
          icon={
            <RiStickyNoteLine
              size={20}
              className='mb-1 fill-neutral-300'
            />
          }
        />
      )}
    />
  )
}
