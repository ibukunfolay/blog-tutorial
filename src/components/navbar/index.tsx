"use client"
import React, { memo } from 'react'
import { AuthBtn } from '../buttons'

const Navbar = () => {

  return (
    <div className='flex w-full justify-between p-4 border border-red-300 border-solid items-center'>
      <div className="flex justify-start"><h2 className="font-bold text-2xl">Tech Blog</h2></div>
      <div className="flex justify-end"><AuthBtn/></div>
    </div>
  )
}

export default memo(Navbar)