import { Report } from '@/models/Report.model'
import { ReportState } from '../context/Report'

type Action = {
  type: 'set_reports'
  payload: Report[]
} | {
  type: 'add_report' | 'edit_report',
  payload: Report
}

export const reportsReducer = (state: ReportState, action: Action) => {
  switch(action.type) {
    case 'set_reports':
      return {
        ...state,
        reports: action.payload
      }
    case 'add_report':
      return {
        ...state,
        reports: state.reports.concat(action.payload)
      }
    case 'edit_report':
      return {
        ...state,
        reports: state.reports
          .map(report => report.id === action.payload.id ? action.payload : report)
      }
    default:
      return state
  }
}