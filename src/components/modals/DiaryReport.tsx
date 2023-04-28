import { Modal, ModalHeader, ModalContent } from '@/components/atoms/Modal'
import { Props } from './utils'
import { Typography } from '../atoms/Typography'

export const DiaryReport = ({ size, children, onClose }: Props) => {
  return (
    <Modal onClose={onClose!}>
      <ModalContent size={size ?? 'max-w-xl'}>
        <ModalHeader onClose={onClose}>
          <h2 className='font-medium'>
            Report
          </h2>
          <Typography>
        </Typography>
        </ModalHeader>
        {children}
      </ModalContent>
    </Modal>
  )
}

export default DiaryReport
