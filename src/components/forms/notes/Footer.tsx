import { useState } from 'react'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdSaveAlt } from 'react-icons/md'
import { Editor } from '@tiptap/react'
import { Report } from '@/models/Report'
import { Button } from '@/components/atoms/Button'
import { reportService } from '@/services/reports/report.service'
import { DailyReport } from '@/components/modals/DailyReport'
import { DailyReportForm } from '@/components/forms/reports'
import { useToast } from '@/hooks/useToast'

type Props = {
  loading: boolean
  editor: Editor | null
  onSave: () => void
}

export const Footer = ({ loading, editor, onSave }: Props) => {

  const { onOpen: setToast } = useToast()
  const [activities, setActivities] = useState<Report['activities']>([])

  const onOpen = () => {
    setActivities(editor!.getText().split('\n').filter(text => text?.trim().length))
  }

  const onClose = () => {
    setActivities([])
  }

  const createReport = async (activities: Report['activities']) => {
    try {
      
      await reportService
      .createReport({ activities })

      setToast({
        type: 'success',
        message: 'Daily report created successfully'
      })
    
      setActivities([])

    } catch(err) {
      if (err instanceof Error)

      setToast({
        type: 'success',
        message: err.message
      })

      setActivities([])
    }
  
  }

  return (
    <footer className='flex pb-7 gap-6'>
      <Button
        onClick={onOpen}
        icon={<HiOutlineInformationCircle size={22} />}
      >
        Generate Report
      </Button>
      <Button
        loading={loading}
        onClick={onSave}
        icon={<MdSaveAlt size={21} />}
      >
        Save
      </Button>
      {
        Boolean(activities.length) && (
          <DailyReport
            onClose={onClose}
          >
            <DailyReportForm
              report={{ activities }}
              action={createReport}
              text='Create Report'
            />
          </DailyReport>
        )
      }
    </footer>
  )
}
