import { useBoolean } from '@/hooks'
import { Report } from '@/models/Report'
import { Badge } from '@/components/atoms/Badge'
import { Button } from '@/components/buttons/AddButton'
import { Typography } from '@/components/atoms/Typography'
import { DiaryReportForm } from '@/components/forms/reports/Diary'
import { reportService } from '@/services/reports/report.service'
import { useToast } from '@/hooks/useToast'
import { useReports } from '@/hooks/useReports'
import dynamic from 'next/dynamic'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const DailyReportModal = dynamic(() => import('@/components/modals/DiaryReport'), {
  loading: () => null
})

export const Actions = () => {
  const router = useRouter()
  const [open, setOpen] = useBoolean()

  const { addReport } = useReports()
  const { onOpen } = useToast()

  const user = useUser()

  const onSubmit = async (activities: Report['activities']) => {
    try {
      const report = await reportService
        .createReport({ activities, user_id: user?.id })

      addReport(report!)

    } catch (err) {
      if (err instanceof Error) {
        onOpen({
          type: 'error',
          message: err.message
        })
      }
    } finally {
      setOpen.off()
    }
  }

  return (
    <>
      <div className='flex items-center gap-4'>
        <Typography.h2>
          Welcome
        </Typography.h2>
        <Badge />
      </div>
      <div className='flex gap-6 pt-6 pb-8'>
        <Button path='/create-note'>
          Quick Notes
        </Button>
        <Button onClick={setOpen.on}>
          Daily Report
        </Button>
      </div>
      {
        open && (
          <DailyReportModal onClose={setOpen.off} size='max-w-lg'>
            <DiaryReportForm action={onSubmit} />
          </DailyReportModal>
        )
      }
    </>
  )
}
