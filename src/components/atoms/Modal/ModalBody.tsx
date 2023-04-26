import { Props } from './types'

const ModalBody = ({ children }: Props) => {
  return (
    <p className='px-6 text-zinc-400'>
      {children}
    </p>
  )
}

export default ModalBody