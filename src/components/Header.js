import Link from 'next/link'
import Image from 'next/image'

import { Button } from './Button'
import { Container } from './Container'
import CareerDialog from './CareerDialog'
import { SiMinutemailer } from 'react-icons/si'

export function Header() {
  return (
    <header className="h-24 border-b border-slate-200/80 bg-white">
      <Container className="flex h-full w-full items-center">
        <nav className="relative z-50 flex w-full items-center justify-between ">
          <Link href={'/'} className="relative h-32 w-32 md:h-52 md:w-52 ">
            <Image
              src={'/images/Logo.png'}
              fill
              alt="logo"
              className="object-cover"
            />
          </Link>

          <div className="flex w-full items-center justify-end gap-4">
            <CareerDialog />
            <Button variant="primaryOnDark" href="/contact">
              Book a call
              <SiMinutemailer size={15} />
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
