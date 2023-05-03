export const Avatar = ({ username = '' }) => {
  return (
    <div
      className='bg-white uppercase text-zinc-950 w-8 h-8 font-medium rounded-full grid place-content-center'
    >
      {username?.at(0)}
    </div>
  )
}
