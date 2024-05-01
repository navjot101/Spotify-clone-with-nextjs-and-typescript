import React from 'react'

interface BoxProps {
children: React.ReactNode
className?: string
}

const Box = ({children,className}: BoxProps) => {
  return (
    <div className='bg-neutral-900 rounded-lg h-fit w-full'>
        {children}
    </div>
  )
}

export default Box