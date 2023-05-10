export const Avatar = ({ username = '' }) => {
  return <>
    <div
      className='bg-white uppercase text-zinc-950 w-9 h-9 font-medium rounded-full grid place-content-center'
    >
      {username?.at(0)}
    </div>
  </>
}
