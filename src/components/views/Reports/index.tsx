import dayjs  from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import { RiInformationLine } from 'react-icons/ri'
import { Report } from '@/models/Report'
import { Grid } from '@/components/atoms/Grid'
import { Card } from '@/components/atoms/Card'
import { DailyReport } from '@/components/modals/DailyReport'
import { getDates } from '@/utils/getWeekDates'
import { DailyReportForm } from '@/components/forms/reports'
import { reportService } from '@/services/reports/report.service'
import { useReports } from './hooks/useReports'
import { DaysOfWeek } from './DaysOfWeek'

dayjs.extend(isoWeek)

export default function Reports() {

  const { startOfWeek } = getDates()
  const { reports, report, editReport, onSelect, onClear } = useReports()

  const onSubmit = async (activities: Report['activities']) => {
    const data = await reportService
      .editReport({ id: report!.id, activities })
      
    editReport(data!)
    onClear()
  }

  return (
    <>
      {
        report && (
          <DailyReport onClose={onClear}>
            <DailyReportForm
              report={report}
              action={onSubmit}
            />
          </DailyReport>
        )
      }
      <DaysOfWeek
        reports={reports}
        startOfWeek={startOfWeek}
      />
      <Grid
        items={reports}
        renderItem={(props) => (
          <Card
            title={`Report ${dayjs(props.created_at).format('dddd')}`}
            id={props.id}
            key={props.id}
            created_at={props?.created_at ?? ''}
            onClick={() => onSelect(props)}
            icon={
              <RiInformationLine
                size={20}
                className='mb-1 fill-neutral-300'
              />
            }
          />
        )}
      />
    </>
  )
}
