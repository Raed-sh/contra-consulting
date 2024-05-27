const Badge = ({ label }) => {
  return (
    <span
      className=" relative inline-flex cursor-help items-center whitespace-nowrap rounded-full bg-green-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-sm font-bold leading-[16px]
    
        text-accent before:mr-2 before:block before:h-2 before:w-2 before:rounded-full before:bg-secondary
         hover:bg-transparent
         hover:text-secondary
    "
    >
      {label}
    </span>
  )
}

export default Badge
