import { Toast } from '@/components/atoms/Toast'
import { useBoolean } from '@/hooks'
import { useState, createContext } from 'react'

export type ToastState = {
  type: 'success' | 'error'
  message: string
}

type ToastContextType = {
  toast: ToastState | null
  onOpen(toast: ToastState): void
}

export const ToastContext = createContext<ToastContextType>({
  toast: null,
  onOpen() {}
})

export function ToastProvider({ children }: {
  children: React.ReactNode
}) {

  const [toast, setToast] = useState<ToastContextType['toast']>(null)
  const [animation, setAnimation] = useBoolean()

  const onOpen = (values: ToastState) => {
    setToast(values)
    setAnimation.on()

    setTimeout(() => {
      setAnimation.off()
    }, 2000)

    setTimeout(() => {
      setToast(null)
    }, 2200)
  }

  return (
    <ToastContext.Provider
      value={{
        toast,
        onOpen
      }}
    >
      {
        toast !== null && (
          <Toast 
            {...toast}
            animation={animation}
          />
        )
      }
      {children}
    </ToastContext.Provider>
  )
}
