import { useState } from 'react'
import { useBoolean } from '@/hooks'
import { Activity } from '../types'

const getInitialActivities = (initialActivities?: string): Activity[] => {
  if (!initialActivities) return []
  console.log(initialActivities)
  return initialActivities.split(',').map((activity, i) => ({
    id: i,
    name: activity
  }))
}

export const useActivities = (initialActivities?: string) => {
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
