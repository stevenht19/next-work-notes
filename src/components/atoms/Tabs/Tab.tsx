export type Props = {
  value?: number
  index?: number
  label?: string
  children?: React.ReactNode
  onChange?: (n: number) => void
}

const Tab = ({ 
  value, 
  index, 
  label, 
  onChange 
}: Props) => {

  const isSelected = value === index
  const tabColor = isSelected ? 'text-white' : 'text-neutral-400'

  return (
    <button
      className={`w-24 text-neutral-400 ${tabColor}`}
      {...(onChange && {
        onClick: () => onChange(index as number)
      })}
    >
      <span className='block mb-4'>{label}</span>
    </button>
  )
}

export default Tab