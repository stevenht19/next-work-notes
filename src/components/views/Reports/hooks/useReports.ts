import { useEffect, useContext } from 'react'
import { reportService } from '@/services/reports/report.service'
import { ReportContext } from '@/context/Report'

type DateRange = {
  from: string
  until: string
}

export const useReports = ({ from, until }: DateRange) => {
  const { reports, editReport, setReports } = useContext(ReportContext)

  useEffect(() => {
    reportService
      .getReports(from, until)
      .then(setReports)
  }, [])

  return { reports, editReport }
}
