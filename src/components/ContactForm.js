'use client'
import { Button } from '@/components/Button'
import { FieldPath, UseFormReturn, useForm } from 'react-hook-form'
import { services } from '../constants'
import { forwardRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_2fw1v6m'
const TEMPLATE_ID = 'template_smgqupo'
const PUBLIC_KEY = 'gYKo7illt92y7QfLg'

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: {},
      message: '',
    },
  })

  const onSubmit = (data) => {
    const selectedServices = Object.keys(data.service).filter(
      (key) => data.service[key]
    )

    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: selectedServices.join(', '),
      message: data.message,
    }
    console.log(templateParams)
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        alert('SUCCESSFULLT SENT!')
        console.log('email send Successfully!')
        reset()
      })
      .catch((err) => console.error('ERROR', err))
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
          {...register('name', { required: true })}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="foobar@email.com"
          {...register('email', { required: true })}
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          aria-describedby="phone-description"
          placeholder="+962 7 123-4567"
          {...register('phone', { required: true })}
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
            {expectedServices.map(({ label, value }) => (
              <CheckboxField
                key={value}
                label={label}
                name={value}
                {...register(`service.${label}`)}
              />
            ))}
          </div>
        </fieldset>
      </div>
      <div className="mt-10 border-t border-slate-200 pt-8">
        <Button type="submit" className="w-full !text-base sm:!text-lg">
          Get started
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
  ({ label, name, type = 'text', rows = 5, className, ...props }, ref) => {
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
      </div>
    )
  }
)

TextField.displayName = 'TextField'

const CheckboxField = forwardRef(({ label, name, ...props }, ref) => {
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
    </div>
  )
})
CheckboxField.displayName = 'CheckboxField'