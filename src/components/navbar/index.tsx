"use client"
import React, { memo } from 'react'
import { AuthBtn, UploadBtn } from '../buttons'

const Navbar = () => {

  return (
    <div className='flex w-full shadow-md justify-between p-4 border border-red-300 border-solid items-center'>
      <div className="flex "><h2 className="font-bold text-2xl">Tech Blog</h2></div>
      <div className="flex  space-x-4 w-auto"><UploadBtn/> <AuthBtn/></div>
    </div>
  )
}

export default memo(Navbar)