import { ActivityCalendar, Level } from '@/context/types'
import { Report } from '@/models/Report'
import dayjs from 'dayjs'

export const calendarAdapter = (date: string): ActivityCalendar => {
  return {
    count: 0,
    level: 0,
    date
  }
}

export const reactActivityCalendarAdapter = ({ activities, created_at }: Report): ActivityCalendar => {
  return {
    count: activities.length,
    level: getActivityLevel(activities.length),
    date: dayjs(created_at).format('YYYY-MM-DD'),
  }
}

const getActivityLevel = (length: number): Level => {
  if (length === 1) {
    return 1
  }
  if (length <= 3 && length >= 2) {
    return 2
  }
  if (length <= 5 && length > 3) {
    return 3
  }
  if (length > 5) {
    return 4
  }

  return 0
}