import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer';
import Providers from '@/context';

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

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
      <Providers>
        <Navbar/>
          {children}
        <Footer/>
      </Providers>
      </body>
    </html>
  )
}
