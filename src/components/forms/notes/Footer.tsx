import { useState } from 'react'
import { Editor } from '@tiptap/react'
import { Report } from '@/models/Report'
import { Button } from '@/components/atoms/Button'
import { DiaryReport } from '@/components/modals/DiaryReport'
import { DiaryReportForm } from '../reports/Diary'
import { useRouter } from 'next/router'
import { reportService } from '@/services/reports/report.service'

type Props = {
  loading: boolean
  editor: Editor | null
  onSave: () => void
}

export const Footer = ({ loading, editor, onSave }: Props) => {

  const router = useRouter()
  const [activities, setActivities] = useState<Report['activities']>([])

  const onOpen = () => {
    setActivities(editor!.getText().split('\n').filter(text => text?.trim().length))
  }

  const onClose = () => {
    setActivities([])
  }

  const createReport = async (activities: Report['activities']) => {
    await reportService.createReport(activities)
    router.push('/')
  }

  return (
    <footer className='flex pb-7 gap-6'>
      <Button onClick={onOpen}>
        Generate Report
      </Button>
      <Button
        loading={loading}
        onClick={onSave}
      >
        Save
      </Button>
      {
        Boolean(activities.length) && (
          <DiaryReport
            onClose={onClose}
          >
            <DiaryReportForm
              report={{ activities }}
              action={createReport}
              text='Create Report'
            />
          </DiaryReport>
        )
      }
    </footer>
  )
}
