import dayjs, { Dayjs } from 'dayjs'

export const getDates = () => {
  
  const startOfWeek = dayjs()
    .startOf('week').add(1, 'day')

  const endOfWeek = dayjs()
    .endOf('week')

  return {
    startOfWeek,
    endOfWeek
  }
}

export const isWorkday = (date: string) => {

  const actualDay = dayjs(date).format('dddd')

  return actualDay == 'Sunday' || actualDay == 'Saturday'
}

export const toISOString = (date: Dayjs) => date.toISOString() 