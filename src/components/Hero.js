import Link from 'next/link'
import Image from 'next/image'
import { Button } from './Button'
import { Container } from './Container'
import { LinkedInIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons'
import heroPortrait from '@/images/hero-0.png'
import heroBG from '@/images/home-hero-gradient.svg'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 duration-200 hover:bg-slate-50"
      {...props}
    >
      <Icon className="h-4 w-4 fill-slate-600 transition group-hover:fill-slate-700" />
    </Link>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Light blue gradient background */}
      <Image
        src={heroBG}
        alt=""
        className="absolute inset-x-0 top-56 w-auto lg:inset-y-0"
      />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center lg:items-start">
          <h1 className="text-center font-display text-5xl font-semibold  text-[#00215E] sm:text-6xl lg:text-left">
            <span className="relative whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="249"
                height="22"
                viewBox="0 0 249 22"
                fill="currentColor"
                className="absolute left-0 top-2/3 h-[0.6em] w-full fill-sky-200/75"
              >
                <path d="M247.564 18.5807C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97395 208.996 8.57031 200.846 7.46093C186.542 5.51302 172.169 4.08854 157.79 3.01562C126.033 0.645827 94.0929 0.0338481 62.3387 2.36979C42.1785 3.85416 22.008 5.90885 2.32917 10.8463C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7083C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0807 99.2274 10.6719 118.484 10.9557C142.604 11.3125 166.719 12.8333 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0807 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5807Z" />
              </svg>
              <span className="relative">Helping</span>
            </span>{' '}
            Businesses to Improvement
          </h1>
          <p className="mt-6 text-center text-lg leading-8 text-slate-700 lg:text-left">
            Contra is a one-place human resources business solution. We are
            passionate about enhancing the way businesses approach human
            resources in a world of competing people management trends.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-start">
            <Button href="/contact" className="h-11">
              Book a call with us
            </Button>

            <div className="flex gap-3 sm:gap-4">
              <SocialLink
                href="https://www.linkedin.com/company/contrahr/"
                aria-label="Follow on Linkedin"
                icon={LinkedInIcon}
              />

              <SocialLink
                href="https://www.instagram.com/contra.hr/"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />

              {/* <SocialLink
                href="https://wa.me/whatsappphonenumber?text=urlencodedtext"
                aria-label="contact with WhatsApp"
                icon={WhatsAppIcon}
              /> */}
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-lg lg:mr-0">
          <div className="aspect-h-5 aspect-w-4 relative rounded-2xl bg-slate-50">
            <Image
              className="h-full w-full rounded-2xl object-cover object-center"
              src={heroPortrait}
              alt=""
              sizes="(min-width: 552px) 32rem, calc(100vw - 2.5rem)"
              fill
              priority
            />
            <div>
              <div className="absolute -top-6 left-1/2 inline-flex h-12 w-max -translate-x-1/2 items-center justify-center gap-3.5 rounded-2xl bg-secondary px-8  text-sm font-semibold text-slate-700 shadow-lg shadow-sky-100/50 ring-1 ring-slate-900/5 backdrop-blur-md md:-left-28 md:top-14 md:translate-x-0 lg:-top-6 lg:left-44  2xl:-left-20 2xl:top-14">
                7 years of TA experience
              </div>
              <div className="absolute left-12 top-full inline-flex h-12 w-max -translate-y-6 items-center justify-center gap-3.5 rounded-2xl bg-primary  px-8 text-sm font-semibold text-white shadow-lg shadow-sky-100/50 ring-1 ring-slate-900/5 backdrop-blur-md md:left-0 md:-translate-x-20 md:-translate-y-24 lg:-left-3 lg:-translate-y-24  xl:-left-6 xl:-translate-x-28 xl:-translate-y-32">
                250 success stories
              </div>
              <div className="absolute top-[350px] hidden h-12 w-max items-center justify-center gap-3.5 rounded-2xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-sky-100/50 ring-1 ring-slate-900/5 backdrop-blur-md md:left-full md:inline-flex md:-translate-x-32 lg:left-48 lg:hidden  2xl:left-full 2xl:inline-flex 2xl:-translate-x-28">
                <span className="">Tailored Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
