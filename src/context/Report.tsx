import dayjs from 'dayjs'
import { createContext, useCallback, useReducer } from 'react'
import { Report } from '@/models/Report'
import { reportsReducer } from '@/reducers/reportsReducer'
import { ReportType } from '@/reducers/utils'
import { ActivityCalendar, ProfileWithPartialData } from './types'

export interface ReportState {
  reports: Report[]
  team: ProfileWithPartialData[]
  activity: ActivityCalendar[]
  userActivityLoading: boolean
}

export interface ReportContext extends ReportState {
  setReports(reports: Report[]): void
  addReport(report: Report): void
  editReport(report: Report): void
  setTeam(team: ProfileWithPartialData[]): void
  setActivities(activities: ActivityCalendar[]): void
  editUserActivity(activities?: Report['activities'], date?: Report['created_at']): void
}

export const ReportContext = createContext<ReportContext>({} as ReportContext)

const initialState: ReportState = {
  reports: [],
  activity: [],
  team: [],
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

  const setTeam = useCallback((team: ProfileWithPartialData[]) => {
    dispatch({
      type: ReportType.SET_TEAM,
      payload: team
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
        date: date ? 
          dayjs(date).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')
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
        setTeam,
        editUserActivity
      }}
    >
      {children}
    </ReportContext.Provider>
  )
}

