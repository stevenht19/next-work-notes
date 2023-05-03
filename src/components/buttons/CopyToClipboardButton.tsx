import { BsClipboard, BsClipboardCheck } from 'react-icons/bs'
import { useBoolean } from '@/hooks'
import { IconButton } from './IconButton'
import { Props } from './types'

export const CopyToClipboardButton = ({ onClick }: Props) => {

  const [copy, setCopy] = useBoolean()

  const handleClick = () => {
    if (copy) return

    setCopy.on()

    onClick!()

    setTimeout(() => {
      setCopy.off()
    }, 2000)
  }

  return (
    <div className='relative'>
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
