import { useRef } from 'react'
import { BsClipboardFill } from 'react-icons/bs'
import { useScroll } from '@/hooks/useScroll'
import { useBoolean } from '@/hooks'
import { RxClipboard } from 'react-icons/rx'
import { useModal } from '@/components/atoms/Modal/Modal'
import { useForm, SubmitHandler, } from '@/hooks/useForm'
import { Report } from '@/models/Report.model'
import { Button } from '@/components/atoms/Button'
import { IconButton } from '@/components/buttons/IconButton'
import { RefInput } from '@/components/atoms/RefInput'
import { ActivityItem } from './Activity'
import { Activity } from './types'
import { useActivities } from './hooks/useActivities'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localeData from 'dayjs/plugin/localeData'
import { CopyToClipboardButton } from '@/components/buttons/CopyToClipboardButton'

dayjs.locale('en')
dayjs.extend(relativeTime)
dayjs.extend(localeData)

type Props = {
  report?: Partial<Report> | null
  text?: string
  action: (report: Report['activities']) => Promise<void>
}

export const DiaryReportForm = ({ report, text, action }: Props) => {
  
  const { 
    formValues, 
    onChange, 
    handleSubmit, 
    clearForm,
    replace
  } = useForm<Activity>({
    id: Date.now(),
    name: ''
  })

  const { onFocus, onBlur } = useModal()

  const {
    activities, 
    editing,
    onAdd, 
    onEdit, 
    onDelete, 
    startEditing, 
    stopEditing 
  } = useActivities(report?.activities)

  const [submitting, setSubmitting] = useBoolean()

  const listRef = useScroll(activities)
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit: SubmitHandler<Activity> = (activity) => {
    if (editing) {
      onEdit(formValues)
    } else {
      onAdd(activity)
    }

    clearForm()
    stopEditing()
  }

  const onEdition = (activity: Activity) => {
    startEditing()
    replace(activity)
    inputRef.current?.focus()
  }

  const onSave = async () => {
    setSubmitting.on()

    await action(activities.map(({ name }) => name))
  
    setSubmitting.off()
  }

  const copyToClipboard = () => {
    navigator
      .clipboard
      .writeText(`Buenas tardes.${'\n'}Mis actividades de hoy fueron:${'\n'}${activities.map(act => `- ${act.name}\n`).join('')}`)
  }

  return (
    <div className='p-6 text-neutral-100 leading-7 flex flex-col gap-4'>
      <div className='mb-1 leading-8'>
        <div className='flex justify-between'>
          Good Afternoon!
          <CopyToClipboardButton onClick={copyToClipboard} />
        </div>
        <p>
          My tasks were:
        </p>
      </div>
      {
        Boolean(activities.length) && (
          <ul
            ref={listRef}
            className='py-2 overflow-y-auto max-h-64'
          >
            {
              activities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  activity={activity}
                  onEdit={onEdition}
                  onDelete={onDelete}
                />
              ))
            }
          </ul>
        )
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <RefInput
          ref={inputRef}
          value={formValues.name}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          name='name'
          placeholder='Type an activity'
        />
      </form>
      <Button
        onClick={onSave}
        disabled={!Boolean(activities.length && !formValues.name.length)}
        loading={submitting}
      >
        {report ? `${text || 'Edit Report'}` : 'Create Report'}
      </Button>
    </div>
  )
}
