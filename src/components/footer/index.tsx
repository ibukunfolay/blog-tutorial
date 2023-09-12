import React, { FC, memo } from 'react'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({  }) => {
  return (
    <div className='absolute bottom-0 min-h-16'>Footer</div>
  )
}

export default memo(Footer);