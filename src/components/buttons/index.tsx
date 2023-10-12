'use client'

import React, { memo } from 'react'
import Link from 'next/link';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { createUserSession } from '@/lib/services';
import useAuthStore from '@/store';
import { useRouter } from 'next/navigation';

const AuthButton = () => {

  const {addUser, removeUser, profile} = useAuthStore()

  

  if(profile){
    
    return (
            <button type='submit' className='w-full shadow-md h-full dark:bg-zinc-800/30 dark:from-inherit bg--black pb-6 pt-8 lg:p-4 rounded-lg' onClick={()=>{
              googleLogout()
              removeUser()
            }}>Log out</button>
      )
  }

  return (
    
      <GoogleLogin
      onSuccess={(res) => {
        createUserSession(res.credential, addUser)
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      />
    )
}


const SubmitButton = () => {
    return (
      <div>
          <button type='submit' className='w-full shadow-md h-full dark:bg-zinc-800/30 dark:from-inherit bg--black pb-6 pt-8 lg:p-4 rounded-lg'>Submit</button>
      </div>
    )
}


const UploadButton = () => {

  const {profile} = useAuthStore()
  const router = useRouter()

  if(profile){
    
    return (
           <>
            <button type='submit' onClick={()=>router.push('/upload')} className=' shadow-md h-full dark:bg-zinc-800/30 dark:from-inherit bg--black pb-6 pt-8 lg:p-4 rounded-lg'>Upload</button>
           </>
      )
  }
}  

const UploadBtn = memo(UploadButton)
const SubmitBtn = memo(SubmitButton)
const AuthBtn = memo(AuthButton)

export { SubmitBtn, AuthBtn, UploadBtn };
