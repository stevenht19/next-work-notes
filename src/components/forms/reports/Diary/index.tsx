import { useRef, useState } from 'react'
import { useBoolean } from '@/hooks'
import { useScroll } from '@/hooks/useScroll'
import { useModal } from '@/components/atoms/Modal/Modal'
import { useForm, SubmitHandler, } from '@/hooks/useForm'
import { Button } from '@/components/atoms/Button'
import { RefInput } from '@/components/atoms/RefInput'
import { ActivityItem } from './Activity'
import { Activity } from './types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localeData from 'dayjs/plugin/localeData'


dayjs.locale('en')
dayjs.extend(relativeTime)
dayjs.extend(localeData)

export const DiaryReportForm = () => {

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

  const [activities, setActivities] = useState<Activity[]>([])
  const [isSubmitting, setSubmitting] = useBoolean()
  const [editing, setEditing] = useBoolean()

  const listRef = useScroll(activities)
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit: SubmitHandler<Activity> = (activity) => {
    if (editing) {
      onEdit()
    } else {
      onAdd(activity)
    }

    clearForm()
    setEditing.off()
  }

  const onSave = () => {
    setSubmitting.on()
  }


  const onAdd = (activity: Activity) => {
    setActivities((activities) => {
      return activities.concat(activity)
    })
  }

  const onEdit = () => {
    setActivities((activities) => {
      return activities.map((act) => {
        return act.id === formValues.id ? formValues : act
      })
    })
  }

  const startEditing = (activity: Activity) => {
    replace(activity)
    setEditing.on()
    inputRef.current?.focus()
  }

  const onDelete = (id: Activity['id']) => {
    setActivities(() => {
      return activities
        .filter(activities => activities.id !== id)
    })
  }

  return (
    <div className='p-6 text-neutral-100 leading-7 flex flex-col gap-4'>
      <div className='mb-1 leading-8'>
        <h2>Buenas tardes</h2>
        <p>
          Mis actividades de hoy fueron:
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
                  onEdit={startEditing}
                  onDelete={onDelete}
                  activity={activity}
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
        loading={isSubmitting}
      >
        Create Report
      </Button>
    </div>
  )
}
