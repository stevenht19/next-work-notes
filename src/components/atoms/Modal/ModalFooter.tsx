import { Button } from '@/components/atoms/Button'
import { Props as ModalProps } from './types'

const ModalFooter = ({ onClose, children }: ModalProps) => {
  return (
    <footer className='flex justify-end gap-5 pt-5 pb-6 px-5'>
      <Button onClick={onClose}>
        Cancel
      </Button>
      {children}
    </footer>
  )
}

export default ModalFooter