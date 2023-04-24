import dayjs from 'dayjs'

const getDayStatus = (day: number) => {
  if (day === 6 || day === 7) {
    return {
      color: 'bg-yellow-200/20 text-yellow-200/90',
      status: 'Rest Day'
    }
  }

  return {
    color: 'bg-green-200/20 text-green-200/90',
    status: 'Workday'
  }
}


export const Badge = () => {

  const { color, status } = getDayStatus(dayjs().day())

  return (
    <div
      className={`px-2 py-0.5 mt-2 font-medium inline-block text-xs rounded-sm ${color}`}
    >
      {status}
    </div>
  )
}
