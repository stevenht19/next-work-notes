import { useBoolean } from '@/hooks'
import { Profile } from '@/models/Profile'
import { Report } from '@/models/Report'
import { reportService } from '@/services/reports/report.service'
import { useEffect, useState } from 'react'

export const useUserReports = (userId: Profile['id']) => {
  const [reports, setReports] = useState<Report[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getReports = async () => {
      const data = await reportService
        .findReportByUserId(userId)

      setReports(data ?? [])
      setLoading(false)
    }

    getReports()

  }, [userId])

  return [reports, loading] as const

}
