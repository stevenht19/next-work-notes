import { RiInformationLine, RiStickyNoteLine } from 'react-icons/ri'
import { TbActivity } from 'react-icons/tb'
import { Button } from '@/components/atoms/Button'
import { Box } from '@/components/atoms/Box'

export const Weekend = () => {
  return (
    <>
      {
        <>
          <div className='flex flex-col gap-2 pt-3 pb-6 text-zinc-300 -mt-2'>
            <div className='flex gap-2 items-center'>
              <RiStickyNoteLine
                size={20}
                className='mb-1 fill-white'
              />
              2 Notes
            </div>
            <div className='flex gap-2 items-center'>
              <RiInformationLine
                size={20}
                className='mb-1 fill-white'
              />
              5 / 5 Reports
            </div>
            <div className='flex gap-2 items-center'>
              <TbActivity
                size={20}
                className='mb-1 stroke-white'
              />
              10 Activities
            </div>
          </div>
          <div className='max-w-2xl mb-6'>
            <Box>
              <span className='font-bold'>Note: </span>
              After complete all your daily reports you will be able to generate your weekend report.
            </Box>
          </div>
          <Button>
            Generate Report
          </Button>
        </>
      }
      {
        /*
             <Button>
        Get Report
      </Button> 
        */
      }
    </>
  )
}
