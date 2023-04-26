import { Modal, ModalBody, ModalContent, ModalFooter } from '@/components/atoms/Modal'
import { Button } from '@/components/atoms/Button'
import { Props as ModalProps } from './utils'

type Props = ModalProps & {
  title: string
  color?: string
  confirmButton: string
  action?: () => void
}

export const AlertDialog = ({
  title,
  color,
  confirmButton,
  children,
  action,
  onClose
}: Props) => {
  return (
    <Modal onClose={onClose!}>
      <ModalContent size='max-w-md'>
        <h2 className='p-6 font-medium text-lg'>
          {title}
        </h2>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter onClose={onClose}>
          {
            action ? (
              <Button
                color={color}
                onClick={action}
              >
                {confirmButton}
              </Button>
            ) : null
          }
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}