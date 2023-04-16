type Props = {
  color: 'green' | 'yellow'
  text: string
}

const getColor = (color: Props['color']) => {
  if (color === 'green')
    return 'bg-green-200/20 text-green-200/90'
  if (color === 'yellow')
    return ''
}


export const Badge = ({ color, text }: Props) => {
  return (
    <div
      className={`px-2 py-0.5 mt-2 font-medium inline-block text-xs rounded-sm ${getColor(color)}`}
    >
      {text}
    </div>
  )
}
