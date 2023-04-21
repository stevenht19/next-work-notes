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

const className = 'bg-neutral-800/50 rounded-md px-3 py-2 w-full placeholder:text-neutral-600/70 outline-none focus:bg-neutral-800/90 focus:outline-1 focus:outline-neutral-400'

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
          <label className='block mb-2.5'>
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
