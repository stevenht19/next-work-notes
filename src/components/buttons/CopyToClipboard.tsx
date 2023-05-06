import { BsClipboard, BsClipboardCheck } from 'react-icons/bs'
import { useBoolean } from '@/hooks'
import { IconButton } from './IconButton'
import { Props } from './types'

export const message = 'Buenas tardes.\n Mis actividades de hoy fueron:\n'

export const CopyToClipboard= ({ onClick }: Props) => {
  const [copy, setCopy] = useBoolean()

  const handleClick = async () => {
    if (copy) return

    setCopy.on()

    onClick!()

    setTimeout(() => {
      setCopy.off()
    }, 2000)
  }

  return (
    <div className='relative mb-auto'>
      <IconButton
        onClick={handleClick}
        icon={copy ? (
            <BsClipboardCheck className='fill-zinc-300' />
          ) : (
            <BsClipboard className='fill-zinc-300' />
          )
        }
      />
      {
        copy ? (
          <span className='text-xs absolute -bottom-5 -left-1'>
            Copied!
          </span>
        ) : null
      }
    </div>
  )
}
