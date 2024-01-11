import { Footer, Header } from './components';
import '@/styles/globals.css';
import '@/styles/home.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Demo version 1',
  description: 'Demo Nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
        <div className='wrapper-body'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}