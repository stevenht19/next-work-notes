export type Props = {
  value: string
  name: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void  
}

export const Textarea = (props: Props) => {
  const { value, placeholder, name, onChange } = props

  return (
    <textarea
      rows={0}
      value={value}
      name={name}
      spellCheck='false'
      className='resize-none leading-8 bg-transparent placeholder:text-zinc-500 w-full focus:outline-none focus:outline-1'
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}