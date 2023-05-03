import { IconButton } from '@/components/buttons/IconButton'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Activity } from './types'

type Props = {
  activity: Activity
  onEdit: (activity: Activity) => void
  onDelete: (id: Activity['id']) => void
}

export const ActivityItem = ({
  activity,
  onEdit, 
  onDelete,
}: Props) => {

  const { id, name } = activity

  const handleSelect = () => onEdit(activity)
  const handleDelete = () => onDelete(id)

  return (
    <li
      className='flex gap-3 items-center justify-between py-1.5'
    >
      {name}
      <div className='flex gap-3'>
        <IconButton
          onClick={handleSelect}
          icon={
            <AiFillEdit
              className='fill-neutral-400 group-hover:fill-white'
            />
          }
        />
        <IconButton
          onClick={handleDelete}
          icon={
            <AiFillDelete
              className='fill-neutral-400 group-hover:fill-white'
            />
          }
        />
      </div>
    </li>
  )
}
