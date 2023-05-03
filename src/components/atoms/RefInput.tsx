import { forwardRef } from 'react'
import { Props } from './Input'

const className = 'bg-neutral-800/50 rounded-md px-3 py-2 w-full placeholder:text-neutral-600/70 outline-none focus:bg-neutral-800/90 focus:outline-1 focus:outline-neutral-400'

export const RefInput = forwardRef<HTMLInputElement, Props>(function Input(props, ref) {

  const { value, label, type, name, placeholder, onFocus, onBlur, onChange } = props

  return (
    <div>
      {
        label && (
          <label className='block mb-2.5'>
            {label}
          </label>
        )
      }
      <input
        ref={ref}
        type={type ?? 'text'}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        spellCheck='false'
      />
    </div>
  )
})