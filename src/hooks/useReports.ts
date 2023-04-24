import { useContext } from 'react'
import { ReportContext } from '@/context/Report'

export const useReports = () => {
  return useContext(ReportContext)
}