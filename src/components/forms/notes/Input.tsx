import { forwardRef } from 'react'
import { Props } from '@/components/atoms/Input'

export const Input = forwardRef<HTMLInputElement, Partial<Props>>(function Ref(props, ref) {
  
  const { name, placeholder, value } = props

  return (
    <div>
      <label className='pr-3'>Title: </label>
      <input
        ref={ref}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        spellCheck={false}
        className='py-1.5 px-3 max-w-xs my-3 w-full rounded-md bg-transparent outline outline-1 outline-zinc-800 focus:outline-zinc-300'
      />
    </div>
  )
})
