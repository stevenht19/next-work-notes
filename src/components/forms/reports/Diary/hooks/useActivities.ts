import { useState } from 'react'
import { useBoolean } from '@/hooks'
import { Report } from '@/models/Report.model'
import { Activity } from '../types'

const getInitialActivities = (initialActivities?: Report['activities']): Activity[] => {
  if (!initialActivities) return []

  return initialActivities.map((activity, i) => ({
    id: i,
    name: activity
  }))
}

export const useActivities = (initialActivities?: string[]) => {
  const [activities, setActivities] = useState<Activity[]>(getInitialActivities(initialActivities))
  const [editing, setEditing] = useBoolean()

  const onAdd = (activity: Activity) => {
    setActivities((activities) => {
      return activities.concat(activity)
    })
  }

  const onEdit = (activity: Activity) => {
    setActivities((activities) => {
      return activities.map((act) => {
        return act.id === activity.id ? activity : act
      })
    })
  }

  const startEditing = () => setEditing.on()
  const stopEditing = () => setEditing.off()

  const onDelete = (id: Activity['id']) => {
    setActivities(() => {
      return activities
        .filter(activities => activities.id !== id)
    })
  }

  return {
    activities,
    editing,
    onAdd,
    startEditing,
    stopEditing,
    onEdit,
    onDelete
  }

}
