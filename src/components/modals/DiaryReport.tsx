import { Modal, ModalHeader, ModalContent } from '@/components/atoms/Modal'
import { DiaryReportForm } from '@/components/forms/reports/Diary'
import { Props } from '@/components/atoms/Modal/types'

export const DiaryReport = ({ onClose }: Partial<Props>) => {
  return (
    <Modal onClose={onClose!}>
      <ModalContent>
        <ModalHeader onClose={onClose}>
          <h2 className='font-medium'>
            Report
          </h2>
        </ModalHeader>
        <DiaryReportForm />
      </ModalContent>
    </Modal>
  )
}
