## install next js in the frontend directory

run command - npx create-next-app@latest ./ --ts

## cmd question during installation

C:\Users\OWNER\Documents\GitHub\sanity-blog\frontend>npx create-next-app@latest ./ --ts
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias? ... No / Yes
√ What import alias would you like configured? ... @/\*
Creating a new Next.js app in C:\Users\OWNER\Documents\GitHub\sanity-blog\frontend.

## install sanity cli in root directory

npm create sanity@latest

## login if new else create new project

login or create new account from terminal(will open browser to login)

Looks like you already have a Sanity-account. Sweet!

√ Fetching existing projects
? Select project to use (Use arrow keys)

> Create new project
> ──────────────

## give project name and follow the instructions below

? Your project name: blog
Your content will be stored in a dataset that can be public or private, depending on
whether you want to query your content with or without authentication.
The default dataset configuration has a public dataset named "production".
? Use the default dataset configuration? Yes
√ Creating dataset
? Would you like to add configuration files for a Sanity project in this Next.js folder? Yes
? Do you want to use TypeScript? Yes
? Would you like an embedded Sanity Studio? Yes
? Would you like to use the Next.js app directory for routes? No
? What route do you want to use for the Studio? /admin
? Select project template to use Clean project with no predefined schemas
? Would you like to add the project ID and dataset to your .env file? Yes

## install dependencies

\*zustand
next-auth

## folder structure

replace the page.tsx file in the app dir with the code below:

<!--import React, { FC } from 'react'

interface HomeProps {

}

const Home: FC<HomeProps> = ({  }) => {
  return (
    <div>
     Home
    </div>
  )
}

export default Home; -->

## setup google oauth provider

- configure client on gcp
- add to env file

## build navbar and footer

- add signin button and logout function
  -context for session provider

## setup google login using next-auth

-- authoptions in lib folder
-- next-auth api route

ps: test route
http://localhost:3000/api/auth/signin

ps: view providers
http://localhost:3000/api/auth/providers

remember add callback link to gcp origin

## build sanity schemas for user and post

in the sanity folder at the root

## configure sanity api (cors and token)

ps: create sanity token from /admin manage

## manually add data to sanity

# fetch data from sanity to homepage

--create groq fetch query
-- create preview component and pass into home page

ps: next js image file.

## implement authentication with zustand

\*create authstore

## create utils file

- createUser service & other services

## tools used

*vscode
*nextjs 13
*tailwind css
*zustand

## prerequisites

\*node & npm installed
