import { Modal, ModalHeader, ModalContent } from '@/components/atoms/Modal'
import { Props } from './utils'

export const DiaryReport = ({ children, onClose }: Props) => {
  return (
    <Modal onClose={onClose!}>
      <ModalContent size='max-w-xl'>
        <ModalHeader onClose={onClose}>
          <h2 className='font-medium'>
            Report
          </h2>
        </ModalHeader>
        {children}
      </ModalContent>
    </Modal>
  )
}
