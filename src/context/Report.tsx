import { createContext, useCallback, useReducer } from 'react'
import { Report } from '@/models/Report'
import { reportsReducer } from '@/reducers/reportsReducer'

export interface ReportState {
  reports: Report[]
}

export interface ReportContext extends ReportState {
  setReports(reports: any): any
  addReport(report: Report): void
  editReport(report: Report): void
}

export const ReportContext = createContext<ReportContext>({
  reports: [],
  setReports() {},
  addReport() {},
  editReport() {}
})

const initialState = {
  reports: []
}

export function ReportProvider({ children }: {
  children: React.ReactNode
}) {

  const [reportsState, dispatch] = useReducer(reportsReducer, initialState)

  const setReports = useCallback((reports: Report[]) => {
    dispatch({
      type: 'set_reports',
      payload: reports
    })
  }, [])

  function addReport(report: Report) {
    dispatch({
      type: 'add_report',
      payload: report
    })
  }

  function editReport(report: Report) {
    dispatch({
      type: 'edit_report',
      payload: report
    })
  }

  return (
    <ReportContext.Provider
      value={{
        ...reportsState,
        setReports,
        addReport,
        editReport
      }}
    >
      {children}
    </ReportContext.Provider>
  )
}
