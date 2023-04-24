import { Modal, ModalHeader, ModalContent } from '@/components/atoms/Modal'
import { Props as ModalProps } from '@/components/atoms/Modal/types'

type Props = {
  children: ModalProps['children']
  onClose: ModalProps['onClose']
}

export const DiaryReport = ({ children, onClose }: Props) => {
  return (
    <Modal onClose={onClose!}>
      <ModalContent>
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
