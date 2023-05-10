import { useRef } from 'react'
import { useScroll } from '@/hooks/useScroll'
import { useBoolean } from '@/hooks'
import { Report } from '@/models/Report'
import { useModal } from '@/components/atoms/Modal/Modal'
import { useForm, SubmitHandler, } from '@/hooks/useForm'
import { CopyToClipboard, message } from '@/components/buttons/CopyToClipboard'
import { Button } from '@/components/atoms/Button'
import { RefInput } from '@/components/atoms/RefInput'
import { useActivities } from './hooks/useActivities'
import { ActivityItem } from './Activity'
import { Tips } from './Tips'
import { Activity } from './types'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localeData from 'dayjs/plugin/localeData'

dayjs.locale('en')
dayjs.extend(relativeTime)
dayjs.extend(localeData)

type Props = {
  report?: Partial<Report> | null
  text?: string
  action: (report: Report['activities']) => Promise<void>
}

export const DailyReportForm = ({ report, text, action }: Props) => {

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

  const onCopy = () => {
    navigator
      .clipboard
      .writeText(`${message}-${activities.map(({ name }) => name).join('\n-')}`)
  }
 
  const onSave = async () => {
    setSubmitting.on()
    await action(activities.map(({ name }) => name))
    setSubmitting.off()
  }
  
  return (
    <div className='p-6 text-neutral-100 leading-7 flex flex-col gap-4'>
      <div className='flex justify-between'>
        <div>
          <Tips />
        </div>
        <CopyToClipboard onClick={onCopy} />
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
          placeholder='Type an activity and press enter'
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
