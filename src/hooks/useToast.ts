import { useContext } from 'react'
import { ToastContext } from '@/context/Toast'

export const useToast = () => {
  return useContext(ToastContext)
}
