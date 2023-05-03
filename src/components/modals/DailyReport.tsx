import { Modal, ModalHeader, ModalContent } from '@/components/atoms/Modal'
import { Typography } from '@/components/atoms/Typography'
import { Props } from './utils'

export const DailyReport = ({ 
  title, 
  size, 
  children, 
  onClose
}: Props) => {
  return (
    <Modal onClose={onClose!}>
      <ModalContent size={size ?? 'max-w-xl'}>
        <ModalHeader onClose={onClose}>
          <h2 className='font-medium'>
            {title} Report
          </h2>
          <Typography>
        </Typography>
        </ModalHeader>
        {children}
      </ModalContent>
    </Modal>
  )
}
