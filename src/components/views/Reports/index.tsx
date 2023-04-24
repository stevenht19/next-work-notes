import { RiInformationLine } from 'react-icons/ri'
import { Grid } from '@/components/atoms/Grid'
import { Card } from '@/components/atoms/Card'
import { DiaryReport } from '@/components/modals/DiaryReport'
import { DiaryReportForm } from '@/components/forms/reports/Diary'
import { Report } from '@/models/Report.model'
import { reportService } from '@/services/reports/report.service'
import { useReport } from './hooks/useReport'
import { useReports } from './hooks/useReports'
import { DaysOfWeek } from './DaysOfWeek'
import { getDates, toISOString } from './utils'
import dayjs  from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'

dayjs.extend(isoWeek)

export const Reports = () => {

  const { startOfWeek, endOfWeek } = getDates()

  const { report, onSelect, onClear } = useReport()
  
  const { reports, editReport } = useReports({
    from: toISOString(startOfWeek),
    until: toISOString(endOfWeek)
  })

  const onSubmit = async (activities: Report['activities']) => {
    const data = await reportService
      .editReport({ id: report?.id, activities })
    
    editReport(data!)
    onClear()
  }

  return (
    <>
      {
        report && (
          <DiaryReport onClose={onClear}>
            <DiaryReportForm
              report={report}
              action={onSubmit}
            />
          </DiaryReport>
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
            created_at={props.created_at}
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
