import { Report } from '@/models/Report'
import { ReportState } from '@/context/Report'
import { ActivityCalendar } from '@/context/types'
import { ReportType } from './utils'

type Action = {
  type: ReportType.SET_REPORT
  payload: Report[]
} | {
  type: ReportType.ADD_REPORT | ReportType.EDIT_REPORT,
  payload: Report
} | {
  type: ReportType.SET_USER_ACTIVITY,
  payload: ActivityCalendar[]
} | {
  type: ReportType.EDIT_USER_ACTIVITY,
  payload: Partial<ActivityCalendar>
}

export const reportsReducer = (state: ReportState, action: Action): ReportState => {
  switch(action.type) {
    case ReportType.SET_REPORT:
      return {
        ...state,
        reports: action.payload
      }
    case ReportType.ADD_REPORT:
      return {
        ...state,
        reports: state.reports.concat(action.payload)
      }
    case ReportType.EDIT_REPORT:
      return {
        ...state,
        reports: state.reports
          .map(report => report.id === action.payload.id ? action.payload : report)
      }
    case ReportType.SET_USER_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
        userActivityLoading: false
      }
    case ReportType.EDIT_USER_ACTIVITY:
      return {
        ...state,
        activity: state?.activity?.map((date) => {
          return date?.date === action.payload.date ? {...date, count: action.payload.count! } : date
        })
      }
    default:
      return state
  }
}