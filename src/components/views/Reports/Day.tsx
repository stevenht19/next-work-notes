import { DiaryReportForm } from '@/components/forms/reports/Diary'
import { DiaryReport } from '@/components/modals/DiaryReport'
import { useBoolean } from '@/hooks'
import { useReports } from '@/hooks/useReports'
import { useToast } from '@/hooks/useToast'
import { Report } from '@/models/Report'
import { reportService } from '@/services/reports/report.service'
import { toISOString } from '@/utils/getWeekDates'
import dayjs, { Dayjs } from 'dayjs'

type Props = {
  day: Dayjs
  days: number[]
}

export const Day = ({ day, days }: Props) => {

  const dayTitle = day.format('dddd')
  const isNotReported = dayjs(day).isBefore(new Date()) && !days.includes(day.day())
  const isDayCompleted = days.includes(day.day()) ? 'text-green-300' : 'text-white'

  const { addReport } = useReports()
  const { onOpen } = useToast()

  const [open, setOpen] = useBoolean()

  const onClick = () => {
    if (!isNotReported) return
    setOpen.on()
  }

  const createReport = async (activities: Report['activities']) => {
    try {
      const report = await reportService
        .createReport({ 
          activities, 
          created_at: toISOString(dayjs(day).hour(dayjs().hour())) 
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
          <DiaryReport size='max-w-lg' onClose={setOpen.off}>
            <DiaryReportForm action={createReport} />
          </DiaryReport>
        )
      }
    </>
  )
}
