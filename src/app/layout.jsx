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
    default:
      'Contra Consulting',
  },
  description:"HR and consulting compnay in MENA region",
  keywords:["HR", "consultation", "business in jordan","HR in jordan","Business", "management" ]
  
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
