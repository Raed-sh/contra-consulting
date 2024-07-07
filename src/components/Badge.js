import clsx from 'clsx'

const Badge = ({ label, className, ...props }) => {
  return (
    <span
      className={clsx(
        `relative inline-flex cursor-help items-center whitespace-nowrap rounded-full bg-green-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-sm font-bold leading-[16px]
        
        text-accent before:block before:h-2 before:w-2 before:rounded-full before:bg-secondary hover:bg-transparent hover:text-secondary
        ltr:before:mr-2
        rtl:before:ml-2
        `,
        className
      )}
      {...props}
    >
      {label}
    </span>
  )
}

export default Badge
