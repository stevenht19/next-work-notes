import React from 'react'

export type Props = {
  value: number
  children: React.ReactElement[]
  onChange: (n: number) => void
}

const Tabs = ({ value, children, onChange }: Props) => {
  const x = `${value * 100}%`

  return (
    <div className='border-b border-zinc-900 relative mt-1'>
      {
        React.Children.toArray(children).map((child, i) => {
          return React.cloneElement(child as React.ReactElement, {
            index: i,
            value: value,
            onChange,
          })
        })
      }
      <div
        style={{
          transform: `translateX(${x})`
        }}
        className={`absolute transition-transform bg-white h-0.5 rounded-lg w-[6rem]`} 
      />
    </div>
  )
}

export default Tabs