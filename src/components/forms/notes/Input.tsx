import { Props } from '@/components/atoms/Input'

export const Input = ({ value, name, placeholder, onChange }: Partial<Props>) => {
  return (
    <div>
      <label className='pr-3'>Title: </label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        autoFocus
        placeholder={placeholder}
        className='py-1.5 px-3 max-w-xs my-3 w-full rounded-md bg-transparent border border-zinc-800'
      />
    </div>
  )
}
