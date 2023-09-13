import Preview from '@/components/preview';
import { getAllPosts } from '@/lib/queries';
import React, { FC } from 'react'

interface HomeProps {
  
}

const Home: FC<HomeProps> = async ({  }) => {
  
  const posts = await getAllPosts()
  console.log(posts)

  return (
    <div>
     {posts.map((post: any)=>(
      <Preview post={post} key={post._id}/>
     ))}
    </div>
  )
}

export default Home;