'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { Button } from './Button'
import { Container } from './Container'
import CareerDialog from './CareerDialog'
import { SiMinutemailer } from 'react-icons/si'
import { useTranslation } from 'next-export-i18n'
import LanguageSwitcherWrapper from './LanguageSwitcher'
import useDirection from '../hooks/useDirection'
import { FiMenu, FiX } from 'react-icons/fi'

export function Header() {
  const { t } = useTranslation()
  const dir = useDirection()

  return (
    <header className="h-24 border-b border-slate-200/80 bg-white" dir={dir}>
      <Container className="flex h-full w-full items-center">
        <nav className="relative z-50 flex w-full items-center justify-between">
          <Link href={'/'} className="relative h-32 w-32 md:h-52 md:w-52">
            <Image
              src={'/images/Logo.png'}
              fill
              alt="logo"
              className="object-cover"
            />
          </Link>

          <div className="md:hidden">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center">
                    {open ? <FiX size={24} /> : <FiMenu size={24} />}
                  </Disclosure.Button>
                  <Disclosure.Panel className="absolute left-0 top-24 w-full bg-white shadow-md transition-transform duration-300 ease-in-out md:hidden">
                    <div className="flex flex-col items-center gap-4 p-4">
                      <CareerDialog />
                      <Button variant="primaryOnDark" href="/contact">
                        {t('header.bookCall')}
                        <SiMinutemailer size={15} />
                      </Button>
                      <LanguageSwitcherWrapper />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <div className="hidden w-full items-center justify-end gap-4 md:flex">
            <CareerDialog />
            <Button variant="primaryOnDark" href="/contact">
              {t('header.bookCall')}
              <SiMinutemailer size={15} />
            </Button>
            <LanguageSwitcherWrapper />
          </div>
        </nav>
      </Container>
    </header>
  )
}
