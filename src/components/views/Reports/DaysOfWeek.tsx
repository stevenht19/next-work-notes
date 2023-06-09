import dayjs, { Dayjs } from 'dayjs'
import { Report } from '@/models/Report'
import { Day } from './Day'

export type Props = {
  reports: Report[]
  startOfWeek: Dayjs
}

export const DaysOfWeek: React.FC<Props> = ({ reports, startOfWeek }) => {
  
  const days = reports
    .map(({ created_at }) => {
      return dayjs(created_at).day()
    })
  
  return (
    <div className='pb-8'>
      <div className='flex gap-6'>
        {
          new Array(5)
            .fill('')
            .map((_, i) => {
              return startOfWeek
                .add(i, 'day')
            })
            .map((day, i) => (
              <Day
                key={i}
                day={day}
                days={days}
              />
            ))
        }
      </div>
    </div>
  )
}
