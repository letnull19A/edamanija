import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { PrimeReactProvider } from 'primereact/api'
import Container from '@/components/Container/layout'
import Header from './ui/Header'
import Footer from '@/components/Footer'
import './globals.css'
import './theme.css'
import 'primeicons/primeicons.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Едамания',
  description: 'Магазин готовой еды',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PrimeReactProvider>
          <Header />
          <main>
            <Container>{children}</Container>
          </main>
          <Footer />
        </PrimeReactProvider>
      </body>
    </html>
  )
}
