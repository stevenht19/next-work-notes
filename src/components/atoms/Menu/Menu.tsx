import { useEffect, useRef } from 'react'
import { MenuItem } from './MenuItem'

type Props = {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

const Menu = ({ open, children, onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (ref.current && !ref.current.contains(target) && (!target.dataset.active)) {
        onClose()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [onClose])

  return (
    <div ref={ref} className='relative'>
      {
        open && (
          <div
            className='shadow-lg opacity-0 animate-[fadeIn_.22s_forwards] top-full m-2 rounded-md bg-neutral-950 border border-neutral-700 right-0 absolute w-48'
          >
            {children}
          </div>
        )
      }
    </div>
  )
}

Menu.Item = MenuItem

export default Menu