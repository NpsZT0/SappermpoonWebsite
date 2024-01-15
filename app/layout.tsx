import { SpeedInsights } from "@vercel/speed-insights/next"

import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import './globals.css'

import Header from './components/header'
import Footer from './components/footer'

const noto = Noto_Sans_Thai({
  subsets: ['thai'],
})

export const metadata: Metadata = {
  // metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: 'ทรัพย์เพิ่มพูน',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="default">
      <head>
        <link rel="icon" href="/favicon/circle/spp-black.ico" type="image/x-icon" sizes="any" />
      </head>
      <body
        className={`${noto.className} h-svh`}
      >
        <Header/>
        {children}
        <Footer/>
        <SpeedInsights />
      </body>
    </html>
  )
}
