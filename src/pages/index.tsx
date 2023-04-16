import { HomeTabs } from '@/components/tabs/HomeTabs'
import { Button } from '@/components/buttons/AddButton'
import { Badge } from '@/components/atoms/Badge'
import { Typography } from '@/components/atoms/Typography'

export default function Home() {
  return (
    <>
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
      <HomeTabs />
    </>
  )
}
