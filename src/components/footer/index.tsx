import React, { FC, memo } from 'react'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({  }) => {
  return (
    <div className='shadow-md w-full flex justify-center items-center min-h-[5em]'>&copy; Tech writers blog 2021.</div>
  )
}

export default memo(Footer);