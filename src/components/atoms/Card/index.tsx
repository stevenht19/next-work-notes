import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import Link from 'next/link'

dayjs.extend(calendar)

type Props = {
  id: number | string
  title: string
  subheader?: string
  created_at?: string
  path?: string
  icon?: React.ReactNode
  avatar?: React.ReactNode
  onClick?: () => void
}

export const Card = ({
  path,
  id,
  icon,
  title,
  avatar,
  subheader,
  created_at,
  onClick
}: Props) => {

  const date = created_at ? dayjs(created_at).calendar() : null
  const className = 'rounded-md outline outline-1 outline-zinc-900 p-4 hover:outline-2'

  if (!path) {
    return (
      <button
        className={className}
        onClick={onClick}
      >
        {
          avatar ? (
            <div className='flex'>
              {avatar}
              <div className='pl-3'>
                <CardTitle>
                  {title}
                </CardTitle>
                {
                  subheader && (
                    <CardSubheader>
                      {subheader}
                    </CardSubheader>
                  )
                }
              </div>
            </div>
          ) : (
            <>
              {icon}
              <CardTitle>
                {title}
              </CardTitle>
            </>
          )
        }
        {
          date && (
            <CardDate>
              {date}
            </CardDate>
          )
        }
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
  <h2 className='font-bold text-start text-sm text-neutral-300'>
    {children}
  </h2>
)

const CardDate = ({ children }: {
  children: React.ReactNode
}) => (
  <span className='text-zinc-600 text-xs flex justify-end mt-1.5'>
    {children}
  </span>
)

const CardSubheader = ({ children }: {
  children: React.ReactNode
}) => (
  <span className='text-xs text-zinc-400 mt-1'>
    {children}
  </span>
)