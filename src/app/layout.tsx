import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionProvider from '@/context';
import { getServerSession } from 'next-auth';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanity Blog',
  description: 'Nextjs Blog with Sanity CMS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession()

  return (
    <html lang="en">
      <SessionProvider session={session}>
      <body className={inter.className}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
      </SessionProvider>
    </html>
  )
}
