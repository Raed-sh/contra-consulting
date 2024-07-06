'use client'
import { useScroll, motion, useTransform } from 'framer-motion'
import { Fragment, useRef } from 'react'
import Badge from '../Badge'
import { Tooltip } from 'react-tooltip'

import Link from 'next/link'
import Image from 'next/image'
import workBG from '@/images/featured-work-item-bg.svg'
import { useTranslation } from 'next-export-i18n'
function ServiceCard({ service }) {
  const { t } = useTranslation()
  const { title, description, tags, url, thumbnail } = service
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="relative grid items-center gap-8 overflow-hidden rounded-2xl bg-slate-50 px-4 pb-14 pt-5 shadow-sm shadow-sky-100/50 ring-1 ring-slate-100 sm:gap-12 sm:px-8 sm:pt-8 lg:grid-cols-12 lg:px-0 lg:py-0 xl:gap-16 xl:pt-16">
        <Image
          src={workBG}
          alt=""
          className="absolute inset-x-0 bottom-0 h-auto w-full lg:top-6 lg:h-full"
        />
        <div className="relative order-2 px-1 sm:px-4 lg:order-1 lg:col-span-6 lg:pb-16 lg:pl-12 lg:pt-16 xl:col-span-5 xl:pb-24 xl:pl-16 xl:pt-8">
          <h3 className="mt-5 font-display text-2xl font-medium text-[#00215E] sm:mt-6 sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 text-md leading-8 text-slate-700 sm:mt-4 sm:text-base sm:leading-8">
            {description}
          </p>
          <div className="my-4 inline-flex flex-wrap items-center gap-4">
            {tags.map(({ key, value }) => (
              <Fragment key={key}>
                <Badge
                  key={key}
                  label={key}
                  data-tooltip-id={key}
                  data-tooltip-content={value}
                />
                <Tooltip
                  id={key}
                  style={{
                    zIndex: 50,
                    maxWidth: '70%',
                    borderRadius: '20px',
                  }}
                  place="top"
                />
              </Fragment>
            ))}

            {/* <p>{value}</p> */}
          </div>
          <Link
            href={url || '/contact'}
            className="group mt-14 flex w-fit  items-center gap-2 rounded-lg bg-secondary p-2 text-lg font-medium text-white duration-200 ease-in-out hover:text-primary sm:mt-16 sm:text-md"
          >
            {t('homePage.services.moreInformation')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-white  duration-300 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <Link
          href={url || '/contact'}
          className="group aspect-h-9 aspect-w-16 relative order-1 h-full w-full overflow-hidden rounded-2xl ring-1 ring-slate-100/75 lg:order-2 lg:col-span-6 lg:rounded-l-none lg:rounded-r-none xl:col-span-7 xl:rounded-tl-2xl"
        >
          <Image
            src={thumbnail}
            alt={title}
            className="absolute inset-0 object-cover object-top transition duration-300 group-hover:scale-105"
            fill
            sizes="(min-width: 1280px) 43rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 4.5rem)"
          />
        </Link>
      </section>
    </motion.div>
  )
}

export default ServiceCard
