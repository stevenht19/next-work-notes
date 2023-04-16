type Props = {
  loading?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

export const FloatingButton = ({ icon, children }: Props) => {

  const withIcon = icon ? 'flex gap-3 items-center' : ''

  return (
    <button 
      className={`bg-gray-50 text-lg font-medium absolute px-6 py-3 rounded-full bottom-10 right-0 text-gray-900 ${withIcon}`}
    >
      {icon && icon}
      {children}
    </button>
  )
}
