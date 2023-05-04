import { Report } from '@/models/Report'
import dayjs from 'dayjs'

export const WeeklyReport = ({ id, created_at, activities }: Report) => {
  return (
    <div>
      <h2 className='font-semibold my-2 text-sm'>{dayjs(created_at).format('dddd')} {dayjs(created_at).format('DD/MM/YYYY')}</h2>
      <ul className='pl-2 list-disc text-zinc-200 text-sm leading-7'>
        {activities.map((act) => (
          <li key={act}>
            - {act}
          </li>
        ))}
      </ul>
    </div>
  )
}
