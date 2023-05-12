import { useContext, useState } from 'react'
import { ReportContext } from '@/context/Report'
import { Report } from '@/models/Report'
import { useReportsData } from '@/hooks/useReportsData'

export const useReports = () => {

  const { editReport } = useContext(ReportContext)
  const [reports] = useReportsData()
  const [report, setReport] = useState<Report | null>(null)

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
