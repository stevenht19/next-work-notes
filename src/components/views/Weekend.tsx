import { RiInformationLine, RiStickyNoteLine } from 'react-icons/ri'
import { TbActivity } from 'react-icons/tb'
import { useReportsData } from '@/hooks/useReportsData'
import { Button } from '@/components/atoms/Button'
import { Box } from '@/components/atoms/Box'
import { HomeProps } from '@/pages'

export const Weekend = ({ notes }: HomeProps) => {
  const [reports] = useReportsData()

  const activitiesCount = reports.reduce((acc, value) => {
    return acc + value.activities.length
  }, 0)

  return (
    <>
      <div className='flex flex-col gap-2 pt-3 pb-6 text-zinc-300 -mt-2'>
        <div className='flex gap-2 items-center'>
          <RiStickyNoteLine
            size={20}
            className='mb-1 fill-white'
          />
          {notes?.length} Notes
        </div>
        <div className='flex gap-2 items-center'>
          <RiInformationLine
            size={20}
            className='mb-1 fill-white'
          />
          {reports?.length} / 5 Reports
        </div>
        <div className='flex gap-2 items-center'>
          <TbActivity
            size={20}
            className='mb-1 stroke-white'
          />
          {activitiesCount} Activities
        </div>
      </div>
      {
        reports?.length !== 5 && (
          <div className='max-w-2xl mb-6'>
            <Box>
              <span className='font-bold'>Note: </span>
              {`AI Report Generator is comming soon...`}
            </Box>
          </div>
        )
      }
      {
        /*
          <Button
            //disabled={reports?.length !== 5}
          >
            Generate Report
          </Button> 
        */
      }
    </>
  )
}
