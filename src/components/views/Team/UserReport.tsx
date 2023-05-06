import dayjs from 'dayjs'
import { useUserReports } from './hooks/useReport'
import { Typography } from '@/components/atoms/Typography'
import { CopyToClipboard } from '@/components/buttons/CopyToClipboard'
import { ProfileWithPartialData } from './hooks/useProfiles'
import { WeeklyReport } from './Report'

type Props = {
  user: ProfileWithPartialData
}

export const UserReport = ({ user }: Props) => {
  const [reports, loading] = useUserReports(user.id)

  if (loading) {
    return (
      <p className='p-6'>
        Loading...
      </p>
    )
  }

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
  }

  const onCopy = () => {
    const reportToCopy = reports.map((report) => {
      return `\n${dayjs(report.created_at).format('dddd')} ${dayjs(report.created_at).format('DD/MM/YYYY')}\n${report.activities.map((act) => `\n- ${act}`).join('')}`
    }).join('\n')

    copyToClipboard(`${user.username} Report\n${reportToCopy}`)
  }

  return (
    <div className='p-6'>
      <div className='overflow-y-auto max-h-96'>
        <div className='flex justify-end mr-2'>
          {
            Boolean(reports.length) && (
              <CopyToClipboard onClick={onCopy} />
            )
          }
        </div>
        {
          reports.length ?
            reports?.map((report) => (
              <WeeklyReport
                key={report.id}
                {...report}
              />
            )) : (
              <Typography>
                {`User haven't made reports during the week.`}
              </Typography>
            )
        }
      </div>
    </div>
  )
}
