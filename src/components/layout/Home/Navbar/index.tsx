import { Fragment } from 'react'
import { useBoolean } from '@/hooks'
import { Badge } from '@/components/atoms/Badge'
import { Button } from '@/components/buttons/AddButton'
import { Typography } from '@/components/atoms/Typography'
import { DiaryReport } from '@/components/modals/DiaryReport'

export const Navbar = () => {

  const [open, setOpen] = useBoolean()

  return (
    <Fragment>
      <div className='flex items-center gap-4'>
        <Typography.h2>
          Welcome
        </Typography.h2>
        <Badge color='green' text='Workday' />
      </div>
      <div className='flex gap-6 pt-6 pb-8'>
        <Button path='/create-note'>
          Quick Notes
        </Button>
        <Button onClick={setOpen.on}>
          Diary Report
        </Button>
        <Button path='/notes'>
          Weekend Report
        </Button>
      </div>
      {
        open && (
          <DiaryReport onClose={setOpen.off} />
        )
      }
    </Fragment>
  )
}
