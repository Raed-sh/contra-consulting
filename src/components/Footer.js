import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import { Button } from './Button'
import { Container } from './Container'
import newsletterBg from '@/images/newsletter-bg.png'
import {
  DribbbleIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
} from './SocialIcons'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  {
    label: 'Email me',
    icon: EmailIcon,
    href: '/contact',
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/contra.hr/',
  },

  {
    label: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/company/contrahr/',
  },
]

function SocialLink({ icon: Icon, label, ...props }) {
  return (
    <Link
      className="flex items-center justify-center gap-2.5 rounded-full border border-slate-600/90 py-2.5 text-sm text-slate-50 duration-200 ease-in-out hover:bg-slate-800 hover:text-white lg:gap-2 xl:gap-2.5"
      {...props}
    >
      <Icon className="h-4 w-4 shrink-0 text-slate-200 duration-200 ease-in-out group-hover:fill-slate-100" />
      {label}
    </Link>
  )
}

export function Footer({ newsletter = true }) {
  return (
    <section className={clsx(newsletter && 'pt-12 sm:pt-16')}>
      <footer className="overflow-hidden bg-slate-900 pb-8 pt-20 sm:pb-12 sm:pt-24 lg:pt-32">
        <Container>
          <div className="mx-auto grid max-w-xl items-center gap-5 lg:mx-0 lg:max-w-none lg:grid-cols-12 lg:gap-12 xl:gap-20">
            <div className="lg:col-span-7">
              <h3 className="text-center font-display text-4xl font-semibold text-white sm:text-5xl lg:max-w-xl lg:text-left">
                Lets make something great together
              </h3>
              <div className="hidden lg:block">
                <Button
                  href="/contact"
                  variant="primaryOnDark"
                  className="mt-12"
                >
                  Book a call
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center lg:col-span-5 lg:items-start">
              <p className="text-center text-lg text-slate-50 lg:max-w-md lg:text-left">
                Are you prepared to improve the performance of your business and
                HR operations?
              </p>
              <p className="text-center text-lg text-slate-50 lg:max-w-md lg:text-left">
                Get in touch with us immediately to find more about our
                comprehensive HR services and how we can customize plans to fit
                your unique needs
              </p>

              <Button
                href="/contact"
                variant="primaryOnDark"
                className="mt-10 lg:hidden"
              >
                Book a call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <div className="mt-16 grid w-full max-w-sm grid-cols-2 gap-3.5 sm:max-w-none sm:grid-cols-3 lg:mt-8 lg:gap-2.5 xl:gap-3.5">
                {socialLinks.map((socialLink) => (
                  <SocialLink
                    key={`footer-social-link-${socialLink.label}`}
                    icon={socialLink.icon}
                    label={socialLink.label}
                    href={socialLink.href}
                  />
                ))}
              </div>
            </div>
          </div>
          <hr className="mb-6 mt-12 h-px w-full border-slate-600/90 sm:mb-10 sm:mt-16" />
          <div className="flex flex-col items-center justify-end md:flex-row">
            {/* <div className="flex items-center gap-6">
              {links.map((link, index) => (
                <Link
                  key={`footer-link-${index}`}
                  href={link.href}
                  className="text-base font-medium text-slate-100 duration-200 ease-in-out hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div> */}
            <p className="mt-8 text-base text-secondary md:mt-0">
              © {new Date().getFullYear()} Contra Consulting. All rights
              reserved.
            </p>
          </div>
        </Container>
      </footer>
    </section>
  )
}
