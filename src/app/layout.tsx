import { Comfortaa, Noto_Sans } from 'next/font/google'
import Link from 'next/link'

import './globals.css'
import { Button, RequestAccessButton } from '@/components/Button'
import { Email, Twitter } from '@/components/Svg'
import { WhitepaperLink } from '@/components/Links'

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className='font-body min-h-screen'>
        <header className="content-width-wrapper flex place-content-between items-center py-6">
          <h1 className="text-3xl font-heading">
            <Link href="/">Hadar<span className='text-col6'>.ai</span></Link>
          </h1>
          <div className='font-heading'>
            <WhitepaperLink />
            <RequestAccessButton className='ml-10 max-md:hidden' />
          </div>
        </header>
        {children}
        <footer className="content-width-wrapper">
          <div className='flex place-content-between items-start max-md:flex-col'>
            <div className='w-6/12 flex place-content-start items-start text-sm max-md:w-full'>
              <div className="footer_link_column mr-20">
                <p >Product</p>
                <ul>
                  <li><WhitepaperLink /></li>
                </ul>
              </div>
              <div className='footer_link_column'>
                <p>Legal</p>
                <ul>
                  <li><Link href="/terms">Terms and conditions</Link></li>
                  <li><Link href="/privacy">Privacy policy</Link></li>
                </ul>
              </div>
              <div>
              </div>
            </div>
            <div className='flex place-content-end items-center max-md:mt-20'>
              <em className='mr-4'>Get in touch:</em>
              <span className='inline-block w-6 h-6 mr-4'><a href="https://twitter.com/hadar_ai"><Twitter className='fill-current' /></a></span>
              <span className='inline-block w-6 h-6'><a href="mailto:teamhadar@gmail.com"><Email className='fill-current' /></a></span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
