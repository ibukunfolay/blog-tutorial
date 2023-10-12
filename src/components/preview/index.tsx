'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC,memo } from 'react'

interface PreviewProps {
  post: any
}


const Preview: FC<PreviewProps> = ({ post }) => {
const date = new Date(post._createdAt).toDateString()

  return (
    <Link href={`${post.url}`}>
    <div className='w-full shadow-lg overflow-hidden border border-gray-200 border-solid rounded-md '>
    <Image width={500} height={200} priority src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="preview" />
    <div className="p-2">
    <h2 className='font-bold text-lg truncate'>{post.title}</h2>
    <h4 className='truncate'>{post.description}</h4>
    <div className='text-xs font-extralight grid'>
    <span className="">Author: {post.postedBy.name}</span>
    <span className="">Date: {date}</span>
    </div>
    </div>
    </div>
    </Link>
  )
}

export default memo(Preview);