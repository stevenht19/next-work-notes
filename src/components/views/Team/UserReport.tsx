import { Profile } from '@/models/Profile'
import { Typography } from '@/components/atoms/Typography'
import { useUserReports } from './hooks/useReport'
import dayjs from 'dayjs'

type Props = {
  userId: Profile['id']
}

export const UserReport = ({ userId }: Props) => {

  const [reports, loading] = useUserReports(userId)

  if (loading) {
    <div className='p-6'>
      Loading...
    </div>
  }

  return (
    <div className='p-6'>
      <div className='overflow-y-auto max-h-80'>
        {
          reports.length ?
          reports?.map((report, i) => (
            <div key={i}>
              <h2 className='font-semibold my-2 text-sm'>{dayjs(report.created_at).format('dddd')} {dayjs(report.created_at).format('DD/MM/YYYY')}</h2>
              <ul className='pl-2 list-disc text-zinc-200 text-sm leading-7'>
                {report.activities.map((act) => (
                  <li key={i}>
                    - {act}
                  </li>
                ))}
              </ul>
            </div>
          )) : (
            <Typography>
              {`User haven't made reports during the week.`}
            </Typography>
          )
        }
      </div>
    </div>
  )
}
