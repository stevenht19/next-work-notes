import { Props as ButtonProps } from '@/components/buttons/types'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import Link from 'next/link'

dayjs.extend(calendar)

type Props = {
  path?: string
  icon: React.ReactNode
  id: number
  title: string
  created_at: Date
  onClick?: () => void
}

export const Card = (props: Props) => {

  const { path, id, icon, title, created_at, onClick } = props
  const date = dayjs(created_at).calendar()
  const className = 'rounded-md border border-zinc-900 p-4 hover:bg-zinc-900/10'

  if (!path) {
    return (
      <button
        className={className}
        onClick={onClick}
      >
        {icon}
        <CardTitle>
          {title}
        </CardTitle>
        <CardDate>
          {date}
        </CardDate>
      </button>
    )
  }

  return (
    <Link
      href={`${path}/${id}`}
      className={className}
    >
      {icon}
      <CardTitle>
        {title}
      </CardTitle>
      <CardDate>
        {date}
      </CardDate>
    </Link>
  )
}

const CardTitle = ({ children }: {
  children: React.ReactNode
}) => (
  <h2 className='font-bold text-start text-sm mb-1.5 text-neutral-300'>
    {children}
  </h2>
)

const CardDate = ({ children }: {
  children: React.ReactNode
}) => (
  <span className='text-zinc-600 text-xs flex justify-end'>
    {children}
  </span>
)