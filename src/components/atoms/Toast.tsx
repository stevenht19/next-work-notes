import { ToastState } from '@/context/Toast'

type Props = ToastState & {
  animation: boolean
}

export const Toast = ({ message, animation }: Props) => {

  if (!animation) {
    return (
      <div className='bg-zinc-900 font-medium rounded-full fixed top-6 left-1/2 py-2.5 px-5 animate-toastLeave z-50'>
        ✅ {message}
      </div>
    )
  }

  return (
    <div className='bg-zinc-950 border border-zinc-700 font-medium rounded-full fixed top-6 left-1/2 py-2.5 px-5 animate-toast z-50'>
      ✅ {message}
    </div>
  )
}
