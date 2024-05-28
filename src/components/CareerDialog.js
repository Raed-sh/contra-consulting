'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import countries from '../constants/countries'
import departments from '../constants/departments'
import { Button } from './Button'
import { MdOutlineSupervisorAccount } from 'react-icons/md'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const SERVICE_ID = 'service_nlufji3'
const TEMPLATE_ID = 'template_smgqupo'
const PUBLIC_KEY = 'gYKo7illt92y7QfLg'

const CareerDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      nationality: '',
      department: '',
      resume: null,
    },
  })

  const onSubmit = (data) => {
    setIsLoading(true)
    if (!data.name || !data.nationality || !data.phone || !data.department) {
      toast.error('Please fill out all required fields.')
      setIsLoading(false)
      return
    }

    const templateParams = {
      name: data.name,
      phone: data.phone,
      nationality: data.nationality,
      department: data.department,
      // resume: data.file,
    }
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success('Your application submitted successfully')
        reset()
        setIsOpen(false)
      })
      .catch((err) => console.error('ERROR', err))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <Button
        variant=""
        className={'bg-accent text-white'}
        onClick={() => setIsOpen(true)}
      >
        Apply for Career
        <MdOutlineSupervisorAccount />
      </Button>
      <Transition appear show={isOpen}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30"></div>
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform rounded-lg bg-white p-8 shadow-lg transition-all">
                <Dialog.Title className="text-2xl font-bold text-primary">
                  Job Application Form
                </Dialog.Title>
                <Dialog.Description className="text-primary">
                  Fill out the form below to apply for the job.
                </Dialog.Description>
                <form
                  id="job-application-form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-4"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block font-medium text-accent"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('name', {
                        required: 'Full Name is required',
                      })}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block font-medium text-accent"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('phone', {
                        required: 'Phone Number is required',
                      })}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="nationality"
                      className="block font-medium text-accent"
                    >
                      Nationality
                    </label>
                    <select
                      id="nationality"
                      name="nationality"
                      className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('nationality', {
                        required: 'Nationality is required',
                      })}
                    >
                      <option disabled value="">
                        Select your nationality
                      </option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.nationality && (
                      <p className="text-sm text-red-500">
                        {errors.nationality.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="department"
                      className="block font-medium text-accent"
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('department', {
                        required: 'Department is required',
                      })}
                    >
                      <option value="" disabled>
                        Select your department
                      </option>
                      {departments.map((department) => (
                        <option key={department} value={department}>
                          {department}
                        </option>
                      ))}
                    </select>
                    {errors.department && (
                      <p className="text-sm text-red-500">
                        {errors.department.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="cv"
                      className="block font-medium text-accent"
                    >
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('resume')}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant=""
                      className="rounded-md bg-secondary px-4 py-2 text-accent transition duration-300 ease-in-out hover:bg-primary hover:text-white"
                      isLoading={isLoading}
                      disabled={!isValid || isLoading}
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CareerDialog
