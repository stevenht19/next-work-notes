export type Props = {
  value: string
  name: string
  label: string
  placeholder: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  value,
  name,
  label,
  type,
  placeholder,
  onChange
}: Props) => {
  return (
    <div>
      <label className='block mb-2.5'>
        {label}
      </label>
      <input
        type={type ?? 'text'}
        name={name}
        autoCapitalize='off'
        autoComplete='off'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='bg-neutral-800/60 rounded-md px-3 py-2 w-full placeholder:text-neutral-600 outline-none focus:bg-neutral-800 focus:outline-1 focus:outline-neutral-50'
      />
    </div>
  )
}
