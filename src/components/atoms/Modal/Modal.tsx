import { createContext, useRef, useContext } from 'react'
import { useBoolean } from '@/hooks'
import ModalContent from './ModalContent'

type Action = () => void

type ModalContextType = {
  focus: boolean
  onFocus: Action
  onBlur: Action
}

const ModalContext = createContext<ModalContextType>({
  focus: false,
  onFocus() {},
  onBlur() {}
})

type Props = {
  onClose: Action
  children: React.ReactNode
}

export default function Modal({ onClose, children }: Props) {

  const [focus, setFocus] = useBoolean()
  const ref = useRef<HTMLDivElement>(null)

  const handleClick = (e: React.MouseEvent) => {
    if ((e.target === ref.current) && !focus) {
      onClose()
    }
  }

  return (
    <ModalContext.Provider
      value={{
        focus: focus,
        onFocus: setFocus.on,
        onBlur: setFocus.off
      }}
    >
      <div
        ref={ref}
        onClick={handleClick}
        className='bg-black/60 fixed inset-0 z-20 flex flex-col justify-center items-center'
      >
        {children}
      </div>
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)