import { Dayjs } from 'dayjs'

type Props = {
  startOfWeek: Dayjs
  index: number
  days: number[]
}

export const Day = ({ startOfWeek, days, index }: Props) => {

  const dayOfWeek = startOfWeek.add(index, 'day')
  const isDayCompleted = days.includes(dayOfWeek.day()) ? 'text-green-200' : 'text-white'

  return (
    <button
      key={dayOfWeek.day()}
      className={`border border-zinc-800 rounded-full gap-4 w-10 h-10 font-medium grid place-content-center ${isDayCompleted}`}
    >
      {dayOfWeek.format('dddd').charAt(0)}
    </button>
  )
}
