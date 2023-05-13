import dynamic from 'next/dynamic'
import dayjs from 'dayjs'
import { useUser } from '@supabase/auth-helpers-react'
import { useBoolean } from '@/hooks'
import { Report } from '@/models/Report'
import { Badge } from '@/components/atoms/Badge'
import { Button } from '@/components/buttons/AddButton'
import { Typography } from '@/components/atoms/Typography'
import { DailyReportForm } from '@/components/forms/reports'
import { reportService } from '@/services/reports/report.service'
import { useToast } from '@/hooks/useToast'
import { useReports } from '@/hooks/useReports'
import { getDayStatus } from '@/utils/getDayStatus'

const DailyReportModal = dynamic(() =>
  import('@/components/modals/DailyReport').then(mod => mod.DailyReport), {
  loading: () => null
})

export const Actions = () => {
  const user = useUser()
  const [open, setOpen] = useBoolean()
  const { addReport } = useReports()
  const { onOpen } = useToast()
  const { color, status } = getDayStatus(dayjs().day())

  const onSubmit = async (activities: Report['activities']) => {
    try {
      const report = await reportService
        .createReport({
          activities,
          user_id: user?.id
        })

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
        {
          Boolean(user) && (
            <Badge color={color}>
              {status}
            </Badge>
          )
        }
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
          <DailyReportModal
            onClose={setOpen.off}
            size='max-w-lg'
          >
            <DailyReportForm action={onSubmit} />
          </DailyReportModal>
        )
      }
    </>
  )
}
