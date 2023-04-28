import { useEffect, useContext, useState } from 'react'
import { reportService } from '@/services/reports/report.service'
import { ReportContext } from '@/context/Report'
import { Report } from '@/models/Report'

export const useReports = () => {

  const { reports, editReport, setReports } = useContext(ReportContext)
  const [report, setReport] = useState<Report | null>(null)

  useEffect(() => {
    reportService
      .getReports()
      .then(setReports)
  }, [])

  const onEdit = (report: Report) => {
    editReport(report)
    onClear()
  }

  const onSelect = (report: Report) => {
    setReport(report)
  }

  const onClear = () => {
    setReport(null)
  }

  return {
    report,
    reports,
    editReport,
    onSelect,
    onEdit,
    onClear
  }
}
