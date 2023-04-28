import { RiStickyNoteLine } from 'react-icons/ri'
import { HomeProps } from '@/pages'
import { Grid } from '@/components/atoms/Grid'
import { Card } from '@/components/atoms/Card'

export const Notes = ({ notes }: HomeProps) => {
  return (
    <Grid
      items={notes}
      renderItem={(props) => (
        <Card
          title={props.title}
          id={props.id}
          key={props.id}
          path='/note'
          created_at={props.created_at ?? ''}
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
