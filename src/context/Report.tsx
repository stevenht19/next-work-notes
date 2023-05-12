import dayjs from 'dayjs'
import { createContext, useCallback, useReducer } from 'react'
import { Report } from '@/models/Report'
import { reportsReducer } from '@/reducers/reportsReducer'
import { ReportType } from '@/reducers/utils'
import { ActivityCalendar } from './types'

export interface ReportState {
  reports: Report[]
  activity: ActivityCalendar[]
  userActivityLoading: boolean
}

export interface ReportContext extends ReportState {
  setReports(reports: any): any
  addReport(report: Report): void
  editReport(report: Report): void
  setActivities(activities: ActivityCalendar[]): void
  editUserActivity(activities?: Report['activities'], date?: Report['created_at']): void
}

export const ReportContext = createContext<ReportContext>({
  reports: [],
  userActivityLoading: true,
  activity: [],
  setReports() {},
  addReport() {},
  editReport() {},
  setActivities() {},
  editUserActivity() {}
})

const initialState: ReportState = {
  reports: [],
  activity: [],
  userActivityLoading: true
}

export function ReportProvider({ children }: {
  children: React.ReactNode
}) {

  const [reportsState, dispatch] = useReducer(reportsReducer, initialState)

  const setReports = useCallback((reports: Report[]) => {
    dispatch({
      type: ReportType.SET_REPORT,
      payload: reports
    })
  }, [])

  const setActivities = useCallback((activities: ActivityCalendar[]) => {
    dispatch({
      type: ReportType.SET_USER_ACTIVITY,
      payload: activities
    })
  }, [])

  function addReport(report: Report) {
    dispatch({
      type: ReportType.ADD_REPORT,
      payload: report
    })
  }

  function editReport(report: Report) {
    dispatch({
      type: ReportType.EDIT_REPORT,
      payload: report
    })
  }

  function editUserActivity(
    activities: Report['activities'], 
    date?: Report['created_at']
  ) {
    dispatch({
      type: ReportType.EDIT_USER_ACTIVITY,
      payload: {
        count: activities.length,
        date: date ? dayjs(date).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')
      }
    })
  }

  return (
    <ReportContext.Provider
      value={{
        ...reportsState,
        setReports,
        addReport,
        editReport,
        setActivities,
        editUserActivity
      }}
    >
      {children}
    </ReportContext.Provider>
  )
}

