import { useUser } from '@supabase/auth-helpers-react'
import { useBoolean } from '@/hooks'
import { useReports } from '@/hooks/useReports'
import { useToast } from '@/hooks/useToast'
import { Report } from '@/models/Report'
import { DailyReportForm } from '@/components/forms/reports'
import { DailyReport } from '@/components/modals/DailyReport'
import { reportService } from '@/services/reports/report.service'
import { toISOString } from '@/utils/getWeekDates'
import dayjs, { Dayjs } from 'dayjs'

type Props = {
  day: Dayjs
  days: number[]
}

export const Day = ({ day, days }: Props) => {

  const user = useUser()
  const dayTitle = day.format('dddd')
  const isNotReported = dayjs(day).isBefore(new Date()) && !days.includes(day.day())
  const isDayCompleted = days.includes(day.day()) ? 'text-green-300' : 'text-white'

  const [open, setOpen] = useBoolean()

  const { addReport } = useReports()
  const { onOpen } = useToast()

  const onClick = () => {
    if (!isNotReported) return
    setOpen.on()
  }

  const createReport = async (activities: Report['activities']) => {
    try {
      
      const parsedDate = toISOString(dayjs(day).hour(0))
      
      const report = await reportService
        .createReport({ 
          activities,
          user_id: user?.id,
          created_at: parsedDate,
        })

      if (report)
        addReport(report)

      setOpen.off()

    } catch (err) {

      if (err instanceof Error)
      onOpen({
        type: 'error',
        message: err.message
      })
    }
  }

  return (
    <>
      <button
        key={day.day()}
        title={dayTitle}
        className={`border border-zinc-800 rounded-full gap-4 w-10 h-10 font-medium grid place-content-center ${isNotReported ? 'text-red-400' : isDayCompleted}`}
        onClick={onClick}
      >
        {dayTitle.charAt(0)}
      </button>
      {
        open && (
          <DailyReport size='max-w-lg' onClose={setOpen.off}>
            <DailyReportForm
              action={createReport}
              customDate={day.format('YYYY-MM-DD')}
            />
          </DailyReport>
        )
      }
    </>
  )
}
