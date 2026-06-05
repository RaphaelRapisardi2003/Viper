import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import MobileDrawer from '@/components/MobileDrawer'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import { CartProvider } from '@/src/presentation/cart/CartProvider'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Viper — Moda Feminina',
  description: 'Grife italiana de moda feminina de alto padrão. Nascida em Milão, feita para você.',
  icons: { icon: '/Logo/Favicon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </head>
      <body>
        <CartProvider>
          <CustomCursor />
          <AnnouncementBar />
          <Header />
          <MobileDrawer />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
