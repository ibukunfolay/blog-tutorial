'use client'
import Preview from '@/components/preview';
import { getAllPosts } from '@/lib/queries';
import React, { FC, useEffect, useState } from 'react'

interface HomeProps {
  
}

const Home: FC<HomeProps> = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts(){
      const res = await getAllPosts()
      setPosts(res)
    }
    getPosts()
  }, [])
  

  return (
    <div className='p-4 min-h-[70vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
     {posts.map((post: any, i: any)=>(
      <Preview post={post} key={i}/>
     ))}
    </div>
  )
}

export default Home;