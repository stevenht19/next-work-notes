import { ToastState } from '@/context/Toast'

type Props = ToastState & {
  animation: boolean
}

export const Toast = ({ message, animation }: Props) => {

  const toastAnimation = !animation ? 'animate-toastLeave' : 'animate-toast'

  return (
    <div className={`bg-zinc-950 border border-zinc-700 font-medium rounded-md fixed top-10 left-1/2 py-5 px-4 z-50 ${toastAnimation}`}>
      {message}
    </div>
  )
}
