export type Props = {
  value: string
  name: string
  label?: string
  placeholder: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const className = 'bg-transparent outline-1 outline-zinc-800 rounded-sm px-3 py-2 w-full placeholder:text-zinc-600 outline-none focus:outline-zinc-500'

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
      {
        label && (
          <label className='block mb-3.5'>
            {label}
          </label>
        )
      }
      <input
        type={type ?? 'text'}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        spellCheck='false'
      />
    </div>
  )
}
