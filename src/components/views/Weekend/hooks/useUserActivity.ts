import dayjs from 'dayjs'
import { useEffect, useMemo } from 'react'
import { useUser } from '@supabase/auth-helpers-react'
import { reportService } from '@/services/reports/report.service'
import { calendarAdapter, reactActivityCalendarAdapter } from '../adapters/calendar'
import { useReports } from '@/hooks/useReports'
import { getDaysOfTheYear } from '../utils'

export const useUserActivity = () => {
  const { activity, userActivityLoading, setActivities } = useReports()
  
  const user = useUser()
  const totalUserActivity = activity.length

  const dates = useMemo(() => {
    return getDaysOfTheYear()
      .map(calendarAdapter)
  }, [])

  useEffect(() => {

    if (!user?.id || totalUserActivity) return

    const getReportsData = async () => {
      const reports = (await reportService.findAllReports(user.id))
        .map(reactActivityCalendarAdapter)
      const daysToFind = reports.map(({ date }) => dayjs(date).format('YYYY-MM-DD'))

      const activities = dates
        .map((date) => {
          return daysToFind?.includes(date.date) ? (reports.find((a) => a.date === date.date) || date) : date
        })
        .filter(act => act)
      
      setActivities(activities)

    }

    getReportsData()

  }, [user?.id, dates, totalUserActivity, setActivities])

  return [userActivityLoading] as const

}
