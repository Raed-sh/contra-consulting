import { Header } from '@/components/Header'
import { ToastContainer } from 'react-toastify';
import clsx from 'clsx'
import { Inter, Lexend, Gochi_Hand } from 'next/font/google'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})
const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  variable: '--font-gochi-hand',
  display: 'swap',
  weight: '400',
})



export const metadata = {
  metadataBase: new URL('https://contrahr.com'),
  title: {
    template: '%s - Contra Consulting',
    default: 'Contra Consulting',
  },
  description: "HR and consulting company in the MENA region",
  keywords: [
    "Contra", 
    "ContraHR", 
    "HR", 
    "consultation", 
    "business consultation", 
    "HR services", 
    "HR consulting", 
    "business in Jordan", 
    "HR in Jordan", 
    "management consulting", 
    "MENA consulting", 
    "MENA HR services",
    "Contra HR",
    "Contra hr"
  ]
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'font-sans',
          inter.variable,
          lexend.variable,
          gochiHand.variable
        )}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
