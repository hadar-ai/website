import { Comfortaa, Noto_Sans } from 'next/font/google'
import Link from 'next/link'

import './globals.css'
import { Button, RequestAccessButton } from '@/components/Button'
import { Email, Logo, Twitter } from '@/components/Svg'
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#edf6f9" />
        <meta name="theme-color" content="#edf6f9" />
      </head>
      <body suppressHydrationWarning={true} className='font-body min-h-screen relative'>
        <header className="absolute top-0 left-0 right-0 h-20">
          <div className="container flex place-content-between items-center py-6">
            <h1 className="text-2xl font-heading inline-svg">
              <Link href="/"><Logo className="mr-2 mb-2" /><span>Hadar<span className='text-col5'>.ai</span></span></Link>
            </h1>
            <div className='font-heading'>
              <WhitepaperLink />
              <RequestAccessButton className='ml-10 max-md:hidden' />
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-col4">
          <div className='container flex place-content-between items-start max-md:flex-col'>
            <div className='w-6/12 flex place-content-start items-start text-sm max-md:w-full'>
              <div className="footer_link_column mr-20">
                <p>Product</p>
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
