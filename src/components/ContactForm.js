'use client'
import { Button } from '@/components/Button'
import { useForm } from 'react-hook-form'
import { services } from '../constants'
import { forwardRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const SERVICE_ID = 'service_nlufji3'
const TEMPLATE_ID = 'template_433pvl4'
const PUBLIC_KEY = 'gYKo7illt92y7QfLg'

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: {},
      message: '',
    },
  })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data) => {
    setIsLoading(true)

    const selectedServices = Object.keys(data.service).filter(
      (key) => data.service[key]
    )

    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !selectedServices.length > 0
    ) {
      toast.error('Please fill out all required fields.')
      setIsLoading(false)
      return
    }
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: selectedServices.join(', '),
      message: data.message,
    }
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success('Your application submitted successfully')
        reset()
      })
      .catch((err) => toast.error('error', err))
      .finally(() => setIsLoading(false))
  }

  const _services = services.map(({ title, slug }) => ({
    label: title,
    value: slug,
  }))

  const expectedServices = [
    ..._services,
    {
      label: 'Other',
      value: 'other',
    },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="space-y-7">
        <TextField
          label="Name"
          name="name"
          autoComplete="name"
          placeholder="Jane Doe"
          {...register('name')}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="foobar@email.com"
          {...register('email')}
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          aria-describedby="phone-description"
          placeholder="+962 7 123-4567"
          {...register('phone')}
        />
        <TextField
          label="Message"
          name="message"
          type="textarea"
          aria-describedby="message-description"
          placeholder="Tell us a little bit about your project..."
          {...register('message')}
        />
        <fieldset>
          <legend className="block text-md font-medium leading-6 text-[#00215E]">
            Expected services
          </legend>
          <div className="mt-4 space-y-3">
            {expectedServices.map(({ label, value }, index) => (
              <CheckboxField
                key={`service-${index}`}
                label={label}
                name={value}
                {...register(`service.${label}`)}
              />
            ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-10 border-t border-slate-200 pt-8">
        <Button
          type="submit"
          className="w-full !text-base sm:!text-lg"
          isLoading={isLoading}
          disabled={!isValid || isLoading}
        >
          Sumbit Application
        </Button>
      </div>
    </form>
  )
}
export default ContactForm

const inputClasses =
  'block w-full px-4 py-4 leading-4 transition-colors duration-200 ease-in-out border-0 shadow-sm rounded-xl bg-slate-50 text-md text-[#00215E] shadow-sky-100/50 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 hover:bg-white focus:border-0 focus:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600/60'

const Label = ({ name, description, children }) => {
  return (
    <div className="flex justify-between text-md leading-6">
      <label htmlFor={name} className="block font-medium text-[#00215E]">
        {children}
      </label>
      {description && (
        <p id={`${name}-description`} className="text-slate-500/80">
          {description}
        </p>
      )}
    </div>
  )
}

const TextField = forwardRef(
  (
    { label, name, type = 'text', rows = 5, className, error, ...props },
    ref
  ) => {
    return (
      <div className={className}>
        {label && <Label name={name}>{label}</Label>}
        <div className="mt-2">
          {type === 'textarea' ? (
            <textarea
              ref={ref}
              id={name}
              name={name}
              rows={rows}
              {...props}
              className={inputClasses}
            />
          ) : (
            <input
              ref={ref}
              id={name}
              name={name}
              type={type}
              {...props}
              className={inputClasses}
            />
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

TextField.displayName = 'TextField'

const CheckboxField = forwardRef(({ label, name, error, ...props }, ref) => {
  return (
    <div className="flex items-start">
      <div className="flex h-6 items-center">
        <input
          ref={ref}
          id={name}
          name={name}
          type="checkbox"
          className="h-4 w-4 rounded border-slate-300/80 bg-slate-50 text-sky-600 shadow-sm shadow-sky-100/50 focus:outline-none focus:ring-transparent"
          {...props}
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor={name} className="text-slate-700">
          {label}
        </label>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
})
CheckboxField.displayName = 'CheckboxField'
