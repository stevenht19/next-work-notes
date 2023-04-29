import dayjs, { Dayjs } from 'dayjs'

export const getDates = () => {
  const startOfWeek = dayjs()
    .date(dayjs().startOf('week').date() + 1)
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)

  const endOfWeek = dayjs().endOf('week')

  return {
    startOfWeek,
    endOfWeek
  }
}

export const toISOString = (date: Dayjs) => date.toISOString() 