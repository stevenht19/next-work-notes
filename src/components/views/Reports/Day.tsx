import { useBoolean } from '@/hooks'
import dayjs, { Dayjs } from 'dayjs'

type Props = {
  day: Dayjs
  days: number[]
}

export const Day = ({ day, days }: Props) => {

  const isNotReported = dayjs(day).isBefore(new Date()) && !days.includes(day.day())
  const isDayCompleted = days.includes(day.day()) ? 'text-green-300' : 'text-white'
  const dayTitle = day.format('dddd')

  //const [open, setOpen] = useBoolean()

  const onClick = () => {
    if (!isNotReported) return
  }

  return (
    <button
      key={day.day()}
      title={dayTitle}
      className={`border border-zinc-800 rounded-full gap-4 w-10 h-10 font-medium grid place-content-center ${isNotReported ? 'text-red-400' : isDayCompleted}`}
      onClick={onClick}
    >
      {dayTitle.charAt(0)}
    </button>
  )
}
