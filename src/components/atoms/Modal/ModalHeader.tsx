import { MdClose } from 'react-icons/md'
import { Props } from './types'

const ModalHeader = ({ children, onClose }: Props) => {
  return (
    <header className='border-b border-neutral-900 p-5 text-xl flex items-center justify-between'>
      {children}
      <button onClick={onClose}>
        <MdClose size={18} className='mt-0.5 fill-neutral-500' />
      </button>
    </header>
  )
}

export default ModalHeader