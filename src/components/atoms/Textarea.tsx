export type Props = {
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void  
}

export const Input = (props: Props) => {

  const { value, placeholder, onChange } = props

  return (
    <textarea
      value={value}
      className='resize-none bg-transparent h-full placeholder:text-zinc-500 w-full p-3 focus:outline-none focus:outline-1'
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}