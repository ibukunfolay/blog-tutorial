'use client'

import { TextInput } from '@/components/Inputs';
import { SubmitBtn } from '@/components/buttons';
import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { client } from '../../../sanity/lib/client';
import useAuthStore from '@/store';
import { useRouter } from 'next/navigation';

interface UploadProps {}

interface UploadInputs {
    url: string
    title: string
    description: string
}

const Upload: FC<UploadProps> = ({  }) => {

  const router = useRouter()  
  const {profile}: any = useAuthStore()
    const { register,handleSubmit, formState: {errors}} = useForm<UploadInputs>({})
  
  const Submit = async(data: any) => {

    const post = {...data, postedBy: { _type: 'postedBy', _ref: profile._id}, _type: 'post' }

     await client.create(post)
  
    router.push('/')
  }

  return (
    <div className='flex my-10 justify-center items-center min-h-[100vh]'>
        <form onSubmit={handleSubmit((data)=>Submit(data))} className="group w-full lg:w-2/5 space-y-8 rounded-lg border border-transparent px-5 py-8 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
            <h2 className="font-inter text-2xl font-bold leading-3 text-center ">Create new post</h2>
            <div className="space-y-4">
            <TextInput placeholder='Title' type='text' name='title' register={register}/>
            {errors.title && <p>title is required</p>}
            <TextInput placeholder='Description' type='text' name='description' register={register}/>
            {errors.description && <p>enter a description</p>}
            <TextInput placeholder='URL' type='url' name='url' register={register}/>
            {errors.url && <p>url cannot be empty</p>}
            </div>
            <SubmitBtn />
        </form>
    </div>
  )
}

export default Upload;