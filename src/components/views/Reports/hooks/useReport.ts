import { Report } from '@/models/Report.model'
import { useState } from 'react'

export const useReport = () => {
  const [report, setReport] = useState<Report | null>(null)

  const onSelect = (report: Report) => {
    setReport(report)
  }

  const onClear = () => {
    setReport(null)
  }

  return {
    report,
    onSelect,
    onClear
  }
}
