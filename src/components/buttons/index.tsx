'use client'

import React, { memo } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {

  const {data: session} = useSession()

  if(session){
    return (
      <div>
            <button type='submit' className='w-full shadow-md h-full dark:bg-zinc-800/30 dark:from-inherit bg--black pb-6 pt-8 lg:p-4 rounded-lg' onClick={()=>{
              signOut()
            }}>Log out</button>
        </div>
      )
  }

  return (
    <div>
          <button type='submit' className='w-full shadow-md h-full dark:bg-zinc-800/30 dark:from-inherit bg--black pb-6 pt-8 lg:p-4 rounded-lg' onClick={()=>{
              signIn()
            }}>Sign In with Google</button>
      </div>
    )
}


const SubmitButton = () => {
    return (
      <div>
          <button type='submit' className='w-full shadow-md h-full dark:bg-zinc-800/30 dark:from-inherit bg--black pb-6 pt-8 lg:p-4 rounded-lg'>Submit</button>
      </div>
    )
  }

const SubmitBtn = memo(SubmitButton)
const AuthBtn = memo(AuthButton)

export { SubmitBtn, AuthBtn };
