import { Comfortaa, Noto_Sans } from 'next/font/google'
import Link from 'next/link'

import './globals.css'
import { Button } from '@/components/Button'

const ComfortaaFont = Comfortaa({ 
  subsets: ['latin'], 
  weight: '400',
  display: 'swap',
  variable: '--font-comfortaa',   
})
const Noto_SansFont = Noto_Sans({ 
  subsets: ['latin'], 
  weight: ['300','700'], 
  display: 'swap',
  variable: '--font-noto-sans',   
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ComfortaaFont.variable} ${Noto_SansFont.variable}`}>
      <head>
        <title>Hadar.ai</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ef3f6b" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className='font-body min-h-screen'>
        <header className="content-width-wrapper flex place-content-between items-center py-6">
          <h1 className="text-3xl font-heading">
            Hadar<span className='text-col6'>.ai</span>
          </h1>
          <div className='font-heading'>
            <Link className='mr-10' href="/whitepaper">Whitepaper</Link>
            <Button>Request access</Button>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
