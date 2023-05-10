import { useEffect } from 'react'
import { reportService } from '@/services/reports/report.service'
import { useReports } from './useReports'

export const useReportsData = () => {
  const { reports, setReports } = useReports()
  const reportsLength = reports.length !== 0

  useEffect(() => {
    if (reportsLength) return

    reportService
      .getReports()
      .then(setReports)
  }, [setReports, reportsLength])

  return [reports] as const

}
