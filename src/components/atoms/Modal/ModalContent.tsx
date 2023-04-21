import { Props } from './types'

const ModalContent = ({ children }: Props) => {
  return (
    <div className='opacity-0 bg-zinc-950 border border-neutral-900 rounded-md max-w-lg w-full animate-[fadeIn_.22s_ease_forwards]'>
      {children}
    </div>
  )
}

export default ModalContent