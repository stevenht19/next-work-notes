import { ActivityCalendar } from '@/context/types'
import { Report } from '@/models/Report'
import { getActivityLevel } from '@/utils/getActivityLevel'
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
