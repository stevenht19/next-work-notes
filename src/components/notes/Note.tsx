import Link from 'next/link'
import { Note as NoteModel } from '@/models/Note.model'
import { RiStickyNoteLine } from 'react-icons/ri'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'

dayjs.extend(calendar)

export const Note = ({ id, title, created_at }: NoteModel) => {

  const date = dayjs(created_at).calendar()

  return (
    <Link
      href={`/note/${id}`}
      className='rounded-md border border-zinc-900 p-4'
    >
      <RiStickyNoteLine 
        size={20}
        className='mb-1 fill-neutral-300'
      />
      <h2 className='font-bold text-sm mb-1 text-neutral-300'>
        {title}
      </h2>
      <span className='text-zinc-600 text-xs flex justify-end'>
        {date}
      </span>
    </Link>
  )
}
