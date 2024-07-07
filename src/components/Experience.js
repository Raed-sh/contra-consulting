'use client'

import Image from 'next/image'
import { Container } from './Container'
import { useTranslation } from 'next-export-i18n'
import useDirection from '../hooks/useDirection'

export function Experience() {
  const { t } = useTranslation()
  const dir = useDirection()

  const [head0, head1, ...rest] = t('homePage.experience.heading').split('|')
  const [feature0, feature1, feature2] = t('homePage.experience.features', {
    returnObjects: true,
  })
  const achievements = t('homePage.experience.achievements')
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-50 to-white pb-40 pt-20 sm:pt-24 lg:pb-64 lg:pt-32"
      dir={dir}
    >
      <Container>
        <div className="mx-auto grid max-w-xl items-center gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-semibold text-[#00215E] sm:text-5xl">
              {head0}
              <span className="relative whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="249"
                  height="22"
                  viewBox="0 0 249 22"
                  fill="currentColor"
                  className="absolute left-0 top-2/3 h-[0.6em] w-full fill-sky-200/75"
                >
                  <path d="M247.564 18.5808C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97398 208.996 8.57034 200.846 7.46096C186.542 5.51305 172.169 4.08857 157.79 3.01565C126.033 0.645858 94.0929 0.0338786 62.3387 2.36982C42.1785 3.85419 22.008 5.90888 2.32917 10.8464C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7084C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0808 99.2274 10.6719 118.484 10.9558C142.604 11.3125 166.719 12.8334 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0808 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5808Z" />
                </svg>

                <span className="relative text-sky-700">{head1}</span>
              </span>
              {...rest}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-700">
              {t('homePage.experience.description')}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-xl gap-14 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-12 lg:gap-7">
          <div className="max-w-lg lg:col-span-4">
            <ul className="relative">
              <li>
                <div className="relative pb-24 lg:pb-20">
                  <span
                    className="absolute bottom-4 top-24 -ml-px border border-dashed border-slate-300 ltr:left-10 rtl:right-10"
                    aria-hidden="true"
                  ></span>
                  <div className="relative flex space-x-7">
                    <div className="rtl:ml-2">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-6 w-6 text-sky-50"
                        >
                          <g clipPath="url(#clip0_112_3)">
                            <path
                              d="M3.5 19.5V23.5H21.5V19.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14.5 12.5V5.5L17.5 4.5V1.5H7.5V4.5L10.5 5.5V12.5L2.868 15.044C2.051 15.316 1.5 16.081 1.5 16.942V19.5H23.5V16.942C23.5 16.081 22.949 15.317 22.132 15.045L14.5 12.5Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_112_3">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-medium text-[#00215E] ">
                        {feature0.title}
                      </h3>
                      <p className="mt-2.5 text-base text-slate-700">
                        {feature0.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-24 lg:pb-20">
                  <span
                    className="absolute bottom-4 top-24 -ml-px border border-dashed border-slate-300 ltr:left-10 rtl:right-10"
                    aria-hidden="true"
                  ></span>
                  <div className="relative flex space-x-7">
                    <div className="rtl:ml-2">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-6 w-6 text-sky-50"
                        >
                          <g clipPath="url(#clip0_112_53)">
                            <path
                              d="M3.5 1.5H21.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.5 23.5H21.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.5 20.5V19.711C8.50005 19.5142 8.55814 19.3219 8.667 19.158L11.667 14.658C11.7583 14.521 11.882 14.4087 12.0272 14.3311C12.1723 14.2534 12.3344 14.2128 12.499 14.2128C12.6636 14.2128 12.8257 14.2534 12.9708 14.3311C13.116 14.4087 13.2397 14.521 13.331 14.658L16.331 19.158C16.4406 19.3223 16.499 19.5155 16.499 19.713V20.5H8.5Z"
                              fill="currentColor"
                            />
                            <path
                              d="M5.5 23.5V19.711C5.50002 18.9212 5.73384 18.1491 6.172 17.492L9.5 12.5L6.172 7.508C5.73384 6.8509 5.50002 6.07879 5.5 5.289V1.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.5 1.5V5.289C19.5 6.07879 19.2662 6.8509 18.828 7.508L15.5 12.5L18.828 17.492C19.2662 18.1491 19.5 18.9212 19.5 19.711V23.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_112_53">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium text-[#00215E] ">
                        {feature1.title}
                      </h3>
                      <p className="mt-2.5 text-base text-slate-700">
                        {feature1.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative">
                  <div className="relative flex space-x-7">
                    <div className="rtl:ml-2">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-6 w-6 text-sky-50"
                        >
                          <g clipPath="url(#clip0_112_46)">
                            <path
                              d="M23.5 1.5H11.5V11.5L16.5 7.5H23.5V1.5Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.5 22.336C10.5 21.732 10.235 21.157 9.762 20.782C9.039 20.208 7.785 19.5 6 19.5C4.215 19.5 2.961 20.208 2.238 20.782C1.765 21.157 1.5 21.732 1.5 22.336V23.5H10.5V22.336Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 16.5C7.38071 16.5 8.5 15.3807 8.5 14C8.5 12.6193 7.38071 11.5 6 11.5C4.61929 11.5 3.5 12.6193 3.5 14C3.5 15.3807 4.61929 16.5 6 16.5Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M23.5 22.336C23.5 21.732 23.235 21.157 22.762 20.782C22.039 20.208 20.785 19.5 19 19.5C17.215 19.5 15.961 20.208 15.238 20.782C14.765 21.157 14.5 21.732 14.5 22.336V23.5H23.5V22.336Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19 16.5C20.3807 16.5 21.5 15.3807 21.5 14C21.5 12.6193 20.3807 11.5 19 11.5C17.6193 11.5 16.5 12.6193 16.5 14C16.5 15.3807 17.6193 16.5 19 16.5Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_112_46">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium text-[#00215E] ">
                        {feature2.title}
                      </h3>
                      <p className="mt-2.5 text-base text-slate-700">
                        {feature2.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <div className="absolute -bottom-36 -right-8 hidden gap-6 lg:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="83"
                  viewBox="0 0 81 83"
                  fill="none"
                  className="relative -top-2 h-auto w-20 text-slate-600"
                >
                  <g clipPath="url(#clip0_112_68)">
                    <path
                      d="M79.0279 62.2024C58.1227 60.567 37.0551 52.8379 23.5836 35.8709C19.6389 30.9027 16.5994 23.913 14.6598 17.809C14.25 16.519 14.0629 15.1736 13.8444 13.8392C13.6447 12.6204 8.83154 19.8767 8.22696 20.6903C1.76323 29.3888 8.93024 20.1844 10.9563 16.5611C12.5286 13.7492 13.3857 10.1847 15.3992 7.63962C17.0205 5.59024 20.2035 9.67344 21.5513 10.8281C22.9371 12.0152 33.1749 18.4514 29.1817 20.1187C22.0175 23.1101 14.7009 22.4979 7.21764 22.9016"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_112_68">
                      <rect
                        width="85"
                        height="29"
                        fill="white"
                        transform="translate(21.4469 0.837036) rotate(46.0556)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="inline-block max-w-[220px] -rotate-12 transform font-writing text-2xl tracking-wide text-slate-600">
                  {t('homePage.experience.legend')}
                </span>
              </div>
            </ul>
          </div>
          <div className="lg:col-span-8 ltr:lg:pl-8 rtl:lg:pr-8 ltr:xl:pl-24 rtl:xl:pr-24">
            <div className="aspect-h-2 aspect-w-3 relative w-full">
              <Image
                className="h-full w-full rounded-3xl object-cover object-center"
                src={'/images/experience-image.png'}
                alt=""
                fill
                sizes="(min-width: 1280px) 45rem, (min-width: 1024px) calc(66.67vw - 4rem), (min-width: 640px) 36rem, calc(100vw - 2.5rem)"
              />
              <div>
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 backdrop-blur-sm lg:h-44 lg:w-44">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="145"
                    height="145"
                    viewBox="0 0 145 145"
                    fill="none"
                    className="absolute inset-4 h-24 w-24 animate-spin-slow text-[#00215E]/90 lg:h-36 lg:w-36"
                  >
                    <path
                      d="M74.11,7.62l4.01,0.35c2.89,0.25,4.71,2.17,4.47,4.84c-0.24,2.67-2.37,4.24-5.25,3.98l-4.01-0.35L74.11,7.62z M77.38,15.11
		c1.75,0.16,2.99-0.79,3.14-2.48s-0.91-2.84-2.66-2.99L76,9.48l-0.48,5.47L77.38,15.11z"
                      fill="currentColor"
                    />
                    <path
                      d="M85.43,13.35c0.76-2.52,3.29-3.78,5.97-2.97c2.66,0.81,4.07,3.26,3.3,5.79c-0.77,2.53-3.3,3.78-5.96,2.97
		C86.06,18.33,84.66,15.87,85.43,13.35z M92.71,15.57c0.49-1.61-0.31-3.06-1.83-3.52c-1.51-0.46-2.98,0.3-3.47,1.9
		s0.31,3.06,1.83,3.52C90.75,17.93,92.22,17.18,92.71,15.57z"
                      fill="currentColor"
                    />
                    <path
                      d="M111.52,20.31l-7,6.15l-1.9-1.12l1.38-6.16l-4.79,4.14l-1.88-1.11l2-9.11l1.83,1.08l-1.45,6.38l4.97-4.3l1.63,0.97
		l-1.45,6.43l4.97-4.35L111.52,20.31z"
                      fill="currentColor"
                    />
                    <path
                      d="M120.42,28.75l-6.15,6.37l-1.21-1.17l0.56-6.93l-3.74,3.87l-1.46-1.41l6.15-6.37l1.22,1.18l-0.57,6.92l3.74-3.87
		L120.42,28.75z"
                      fill="currentColor"
                    />
                    <path
                      d="M123.4,32.36l1.2,1.66l-5.82,4.21l2.6,3.6l-1.35,0.98l-3.8-5.26L123.4,32.36z"
                      fill="currentColor"
                    />
                    <path
                      d="M124.87,42.13c2.37-1.14,5.02-0.13,6.22,2.39c1.2,2.51,0.35,5.21-2.04,6.35c-2.39,1.14-5.02,0.12-6.22-2.39
		C121.63,45.96,122.5,43.27,124.87,42.13z M128.16,49c1.52-0.73,2.04-2.3,1.36-3.72s-2.23-2-3.75-1.28
		c-1.52,0.73-2.04,2.3-1.36,3.72S126.64,49.73,128.16,49z"
                      fill="currentColor"
                    />
                    <path
                      d="M129.04,60.27l-1.01-3.99l-2.03-0.3l-0.51-2.04l9.55,1.66l0.5,1.96l-7.62,6.01l-0.53-2.09L129.04,60.27z M130.4,59.26
		l2.94-2.19l-3.63-0.53L130.4,59.26z"
                      fill="currentColor"
                    />
                    <path
                      d="M136.97,65.06l0.2,4.02c0.14,2.89-1.5,4.96-4.18,5.1c-2.68,0.13-4.52-1.77-4.66-4.66l-0.2-4.02L136.97,65.06z M130,69.33
		c0.09,1.76,1.19,2.85,2.89,2.77c1.69-0.08,2.68-1.29,2.6-3.04l-0.09-1.87l-5.48,0.27L130,69.33z"
                      fill="currentColor"
                    />
                    <path
                      d="M131.54,90.44c-1.92-0.44-2.79-2.16-2.25-4.47l0.4-1.74l-2.38-0.55l0.46-2l8.63,2l-0.86,3.74
		C135.01,89.72,133.48,90.88,131.54,90.44z M132.01,88.42c0.95,0.22,1.65-0.27,1.93-1.49l0.38-1.63l-3-0.69l-0.38,1.63
		C130.66,87.45,131.07,88.2,132.01,88.42z"
                      fill="currentColor"
                    />
                    <path
                      d="M122.96,96.68l2.94-0.58l0.04-0.09l0.71-1.63l-2.26-0.99l0.82-1.88l8.12,3.54l-1.53,3.51c-0.94,2.17-2.66,3.04-4.48,2.24
		c-1.22-0.53-1.84-1.53-1.84-2.79l-3.4,0.68L122.96,96.68z M130.32,97.79l0.67-1.53l-2.83-1.23l-0.67,1.53
		c-0.5,1.15-0.22,1.96,0.66,2.34C129.04,99.29,129.82,98.94,130.32,97.79z"
                      fill="currentColor"
                    />
                    <path
                      d="M124.85,102.91c2.16,1.5,2.59,4.3,1,6.59c-1.59,2.29-4.35,2.88-6.53,1.37c-2.17-1.51-2.58-4.31-1-6.59
		C119.92,101.98,122.68,101.41,124.85,102.91z M120.5,109.17c1.38,0.96,3.01,0.64,3.91-0.66c0.9-1.3,0.63-2.93-0.75-3.89
		s-3.01-0.64-3.91,0.66C118.85,106.57,119.12,108.21,120.5,109.17z"
                      fill="currentColor"
                    />
                    <path
                      d="M117.5,116.77l-1.64-1.67l-2.92,2.88l-1.16-1.17l2.92-2.88l-2.26-2.3l1.46-1.44l6.22,6.3l-4.76,4.7l-1.15-1.17
		L117.5,116.77z"
                      fill="currentColor"
                    />
                    <path
                      d="M112.48,123.46l-1.63,1.24l-5.36-7.05l1.63-1.24L112.48,123.46z"
                      fill="currentColor"
                    />
                    <path
                      d="M107.31,127.2l-1.78,1.03l-3.6-6.22l-3.84,2.22l-0.84-1.45l5.62-3.25L107.31,127.2z"
                      fill="currentColor"
                    />
                    <path
                      d="M89.4,127.66l-0.58-1.54l6.42-2.42l3.13,8.29l-6.26,2.37l-0.58-1.54l4.36-1.65l-0.68-1.8l-3.85,1.45l-0.56-1.49l3.85-1.45
		l-0.72-1.92L89.4,127.66z"
                      fill="currentColor"
                    />
                    <path
                      d="M82.41,132.91l-3.55,0.47l-0.21-1.57l3.55-0.47L82.41,132.91z"
                      fill="currentColor"
                    />
                    <path
                      d="M69.53,137.33l-4-0.44c-2.88-0.31-4.66-2.27-4.37-4.93c0.29-2.67,2.45-4.19,5.33-3.87l4,0.44L69.53,137.33z M66.41,129.78
		c-1.75-0.19-3.01,0.73-3.19,2.41c-0.18,1.68,0.85,2.85,2.59,3.04l1.86,0.2l0.6-5.46L66.41,129.78z"
                      fill="currentColor"
                    />
                    <path
                      d="M58.32,131.36c-0.82,2.5-3.37,3.71-6.03,2.84c-2.65-0.87-4-3.35-3.18-5.86c0.82-2.51,3.38-3.71,6.03-2.84
		C57.8,126.37,59.14,128.86,58.32,131.36z M51.09,128.99c-0.52,1.6,0.25,3.06,1.75,3.56c1.5,0.49,2.99-0.23,3.52-1.83
		c0.52-1.6-0.25-3.06-1.75-3.56C53.1,126.67,51.61,127.39,51.09,128.99z"
                      fill="currentColor"
                    />
                    <path
                      d="M32.39,123.85l7.13-6l1.87,1.16l-1.5,6.13l4.87-4.04l1.86,1.15l-2.19,9.06l-1.81-1.12l1.58-6.35l-5.06,4.19l-1.61-1
		l1.59-6.4l-5.06,4.25L32.39,123.85z"
                      fill="currentColor"
                    />
                    <path
                      d="M23.68,115.25l6.28-6.24l1.19,1.19l-0.7,6.92l3.81-3.79l1.43,1.44l-6.28,6.24l-1.19-1.2l0.71-6.91l-3.81,3.79L23.68,115.25
		z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.75,111.54l-1.16-1.69l5.91-4.08l-2.52-3.65l1.37-0.95l3.69,5.34L20.75,111.54z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.5,101.77c-2.4,1.09-5.02,0.02-6.17-2.52c-1.15-2.53-0.24-5.21,2.17-6.3s5.02-0.01,6.17,2.52
		C22.83,98.01,21.9,100.68,19.5,101.77z M16.36,94.83c-1.53,0.69-2.09,2.25-1.44,3.69s2.19,2.05,3.72,1.35
		c1.53-0.69,2.09-2.25,1.44-3.69S17.9,94.14,16.36,94.83z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.71,83.53l0.92,4.01l2.02,0.34l0.47,2.05l-9.52-1.86l-0.45-1.97l7.74-5.85l0.48,2.1L15.71,83.53z M14.33,84.5
		l-2.99,2.13l3.62,0.61L14.33,84.5z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.88,78.6l-0.12-4.02c-0.08-2.9,1.6-4.93,4.29-5.01c2.68-0.08,4.48,1.86,4.57,4.75l0.12,4.02L7.88,78.6z M14.94,74.47
		c-0.05-1.76-1.13-2.88-2.83-2.83c-1.7,0.05-2.71,1.23-2.66,2.99l0.05,1.87L15,76.34L14.94,74.47z"
                      fill="currentColor"
                    />
                    <path
                      d="M13.85,53.31c1.91,0.49,2.74,2.22,2.16,4.52l-0.44,1.73l2.37,0.6l-0.5,1.99l-8.59-2.18l0.94-3.72
		C10.37,53.95,11.92,52.82,13.85,53.31z M13.34,55.32c-0.94-0.24-1.65,0.23-1.96,1.45l-0.41,1.62l2.98,0.76l0.41-1.62
		C14.67,56.31,14.27,55.56,13.34,55.32z"
                      fill="currentColor"
                    />
                    <path
                      d="M22.56,47.25l-2.96,0.52l-0.04,0.09l-0.75,1.62l2.24,1.03l-0.86,1.86l-8.04-3.71l1.6-3.48c0.99-2.15,2.72-2.98,4.53-2.15
		c1.21,0.56,1.81,1.57,1.78,2.82l3.42-0.61L22.56,47.25z M15.23,45.99l-0.7,1.52l2.8,1.29l0.7-1.52c0.52-1.14,0.26-1.96-0.61-2.36
		C16.53,44.51,15.75,44.85,15.23,45.99z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.81,40.99c-2.13-1.55-2.5-4.35-0.86-6.61c1.63-2.25,4.41-2.78,6.55-1.23c2.14,1.55,2.5,4.36,0.86,6.61
		C25.72,42.02,22.94,42.54,20.81,40.99z M25.28,34.83c-1.36-0.99-2.99-0.7-3.92,0.58c-0.93,1.28-0.7,2.92,0.67,3.91
		s2.99,0.7,3.92-0.58C26.87,37.46,26.64,35.82,25.28,34.83z"
                      fill="currentColor"
                    />
                    <path
                      d="M28.44,27.3l1.61,1.7l2.98-2.82l1.13,1.19l-2.98,2.82l2.22,2.34l-1.49,1.41l-6.09-6.43l4.86-4.6l1.13,1.19L28.44,27.3z"
                      fill="currentColor"
                    />
                    <path
                      d="M33.6,20.71l1.66-1.21l5.21,7.16l-1.66,1.21L33.6,20.71z"
                      fill="currentColor"
                    />
                    <path
                      d="M38.85,17.08l1.79-0.99l3.47,6.29L48,20.25l0.81,1.46l-5.68,3.13L38.85,17.08z"
                      fill="currentColor"
                    />
                    <path
                      d="M56.79,17l0.55,1.55l-6.47,2.28l-2.95-8.35l6.31-2.23l0.55,1.55l-4.39,1.55l0.64,1.81l3.88-1.37l0.53,1.5l-3.88,1.37
		l0.68,1.93L56.79,17z"
                      fill="currentColor"
                    />
                    <path
                      d="M63.85,11.9l3.56-0.4l0.18,1.57l-3.56,0.4L63.85,11.9z"
                      fill="currentColor"
                    />
                  </svg>
                  <a
                    className=" relative top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900 duration-200 hover:bg-slate-800 ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2 lg:h-20 lg:w-20"
                    aria-label="Download Profile"
                    href="/files/Company Profile - Contra Consulting.pdf"
                    download="Company Profile - Contra Consulting"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="h-5 w-5 text-white lg:h-7 lg:w-7"
                    >
                      <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <line
                          x1="16"
                          y1="2"
                          x2="16"
                          y2="23"
                          stroke="currentColor"
                        ></line>
                        <polyline
                          points="9 16 16 23 23 16"
                          stroke="currentColor"
                        ></polyline>
                        <path d="M2,22v5a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V22"></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <dl className="absolute bottom-0 right-1/2 grid w-max translate-x-1/2 translate-y-3/4 grid-cols-2 gap-5 rounded-2xl bg-sky-700/90 px-6 py-8 text-center backdrop-blur-sm sm:translate-y-1/2 sm:gap-12 sm:p-10 ltr:lg:right-20 ltr:lg:translate-x-0 ">
                  {achievements.map(({ label, count }) => (
                    <div key={label} className="flex flex-col gap-1">
                      <dd className="order-first text-3xl font-extrabold text-white sm:text-4xl">
                        {count}
                      </dd>
                      <dt className="text-sm font-semibold leading-6 text-sky-50">
                        {label}
                      </dt>
                    </div>
                  ))}
                </dl>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="82"
                  height="84"
                  viewBox="0 0 82 84"
                  className="absolute -right-8 -top-8 h-auto w-20 text-slate-700"
                >
                  <g clipPath="url(#clip0_102_2463)">
                    <path
                      d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661"
                      stroke="currentColor"
                      strokeWidth="1.90596"
                      strokeLinecap="round"
                    />
                    <path
                      d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682"
                      stroke="currentColor"
                      strokeWidth="1.90596"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1.13412 46.6647C5.16695 44.8703 8.9688 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952"
                      stroke="currentColor"
                      strokeWidth="1.90596"
                      strokeLinecap="round"
                    />
                    <path
                      d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965"
                      stroke="currentColor"
                      strokeWidth="1.90596"
                      strokeLinecap="round"
                    />
                    <path
                      d="M49.3429 34.6508L52.917 28.1667"
                      stroke="currentColor"
                      strokeWidth="1.90596"
                      strokeLinecap="round"
                    />
                    <path
                      d="M32.9786 50.3504L28.6387 54.6391"
                      stroke="currentColor"
                      strokeWidth="1.90596"
                      strokeLinecap="round"
                    />
                    <path
                      d="M52.6361 48.6656L56.9506 51.5758"
                      stroke="currentColor"
                      strokeWidth="1.90596"
                      strokeLinecap="round"
                    />
                    <path
                      d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586"
                      stroke="currentColor"
                      strokeWidth="1.90596"
                      strokeLinecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_102_2463">
                      <rect width="82" height="84" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Experience
