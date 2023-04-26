import { Props as ModalProps } from './types'

type Props = {
  children: ModalProps['children']
  size?: string
}

const ModalContent = ({ size, children }: Props) => {
  return (
    <div className={`${size || 'max-w-lg'} opacity-0 bg-zinc-950 border border-neutral-900 rounded-md w-full animate-[fadeIn_.22s_ease_forwards]`}>
      {children}
    </div>
  )
}

export default ModalContent