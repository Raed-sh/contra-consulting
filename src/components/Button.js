import Link from 'next/link'
import clsx from 'clsx'
import { FaSpinner } from 'react-icons/fa'

const variantStyles = {
  primaryClassName: 'bg-slate-900 text-white hover:bg-sky-800',
  secondaryClassName:
    'text-[#00215E] shadow-sm shadow-sky-100/50 ring-1 ring-slate-100 hover:bg-slate-200/60 hover:shadow-sky-100/50 bg-slate-100/80',
  primaryOnDarkClassName:
    'bg-secondary hover:bg-accent hover:text-white text-accent',
}

export function Button({
  variant = 'primary',
  className,
  href,
  isLoading = false,
  ...props
}) {
  className = clsx(
    'inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 text-md font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none',
    variantStyles[`${variant}ClassName`],
    'disabled:opacity-50 disabled:select-none disabled:cursor-not-allowed',

    className
  )
  if (isLoading) {
    return (
      <div className={className}>
        <FaSpinner className={'animate-spin'} />
      </div>
    )
  }

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
