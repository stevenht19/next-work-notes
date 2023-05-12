import { RiInformationLine, RiStickyNoteLine } from 'react-icons/ri'
import { TbActivity } from 'react-icons/tb'
import { useReportsData } from '@/hooks/useReportsData'
import { Box } from '@/components/atoms/Box'
import { HomeProps } from '@/pages'
import { Button } from '@/components/atoms/Button'
import { Calendar } from './Calendar'
import { getActivitiesCount } from './utils'

export default function Weekend({ notes }: HomeProps) {
  const [reports] = useReportsData()
  const count = getActivitiesCount(reports)
  const totalReports = reports.length
  const totalNotes = notes.length

  return (
    <>
      <Calendar />
      <div className='flex flex-col gap-2 pt-4 pb-8 text-zinc-300 -mt-2'>
        <div className='flex gap-2 items-center'>
          <RiStickyNoteLine
            size={20}
            className='mb-1 fill-white'
          />
          {totalNotes} Total
        </div>
        <div className='flex gap-2 items-center'>
          <RiInformationLine
            size={20}
            className='mb-1 fill-white'
          />
          {totalReports} / 5 Reports
        </div>
        <div className='flex gap-2 items-center'>
          <TbActivity
            size={20}
            className='mb-1 stroke-white'
          />
          {count} Activities
        </div>
      </div>
      <div className='max-w-sm mb-6'>
        <Box>
          <span className='font-bold'>Note: </span>
          {`AI Report Generator is comming soon...`}
        </Box>
      </div>
      <Button disabled={true}>
        Generate Weekend Report
      </Button>
    </>
  )
}
