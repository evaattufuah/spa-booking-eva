import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Playfair_Display } from "@next/font/google";

import Footer from './components/Footer';
import Navbar from '@/components/ui/Navbar';


const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100', '300'],
  variable: '--font--roboto',
});
const Playfair_Display_init = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font--Playfair_Display',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable}${Playfair_Display_init.variable}`}>
        <div className='z-50'> <Navbar /> </div>


        <div className='pt-16'>
        
          {children}
        
        </div>
        <Footer />
      </body>

    </html>
  )
}
