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
    <div className='w-full '>
           <Image width={400} height={200} src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="preview" />
           <h2>{post.title}</h2>
           <h4>{post.description}</h4>
           <Link href={`${post.url}`}>
           <span className="">Read Article</span>
           </Link><br/>
           <code>{date}</code>
    </div>
  )
}

export default memo(Preview);