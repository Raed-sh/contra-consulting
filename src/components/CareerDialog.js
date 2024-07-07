'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './Button'
import { MdOutlineSupervisorAccount } from 'react-icons/md'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

import { useTranslation } from 'next-export-i18n'

import useDirection from '@/hooks/useDirection'

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY
const TEMPLATE_ID = process.env.NEXT_PUBLIC_CAREER_TEMPLATE_ID

const CareerDialog = () => {
  const { t } = useTranslation()
  const dir = useDirection()
  const departments = t('departments', { returnObjects: true })
  const countries = t('countries', { returnObjects: true })

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
      coverLetter: '',
      resume: null,
    },
  })

  const onSubmit = (data) => {
    setIsLoading(true)
    if (!data.name || !data.nationality || !data.phone || !data.department) {
      toast.error(t('careerDialog.pleaseFillOut'))
      setIsLoading(false)
      return
    }

    const templateParams = {
      name: data.name,
      phone: data.phone,
      nationality: data.nationality,
      department: data.department,
      coverLetter: data.coverLetter,
      // resume: data.file,
    }
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success(t('careerDialog.applicationSubmitted'))
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
        {t('careerDialog.applyForCareer')}
        <MdOutlineSupervisorAccount />
      </Button>
      <Transition appear show={isOpen}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
          dir={dir}
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
                  {t('careerDialog.jobApplicationForm')}
                </Dialog.Title>
                <Dialog.Description className="text-primary">
                  {t('careerDialog.fillOutForm')}
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
                      {t('careerDialog.fullName')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('name', {
                        required: t('careerDialog.requiredField', {
                          field: t('careerDialog.fullName'),
                        }),
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
                      {t('careerDialog.phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('phone', {
                        required: t('careerDialog.requiredField', {
                          field: t('careerDialog.phoneNumber'),
                        }),
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
                      {t('careerDialog.nationality')}
                    </label>
                    <select
                      id="nationality"
                      name="nationality"
                      className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('nationality', {
                        required: t('careerDialog.requiredField', {
                          field: t('careerDialog.nationality'),
                        }),
                      })}
                    >
                      <option disabled value="">
                        {t('careerDialog.selectNationality')}
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
                      {t('careerDialog.department')}
                    </label>
                    <select
                      id="department"
                      name="department"
                      className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('department', {
                        required: t('careerDialog.requiredField', {
                          field: t('careerDialog.department'),
                        }),
                      })}
                    >
                      <option value="" disabled>
                        {t('careerDialog.selectDepartment')}
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
                      htmlFor="coverLetter"
                      className="block font-medium text-accent"
                    >
                      {t('careerDialog.coverLetter')}
                    </label>
                    <textarea
                      type="text"
                      id="coverLetter"
                      name="coverLetter"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      {...register('coverLetter', {
                        required: t('careerDialog.requiredField', {
                          field: t('careerDialog.coverLetter'),
                        }),
                      })}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.coverLetter.message}
                      </p>
                    )}
                  </div>

                  {/* TODO: will used later when we upgrade emailjs account */}
                  {/* <div className="mb-4">
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
                  </div> */}

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant=""
                      className="rounded-md bg-secondary px-4 py-2 text-accent transition duration-300 ease-in-out hover:bg-primary hover:text-white"
                      isLoading={isLoading}
                      disabled={!isValid || isLoading}
                    >
                      {t('careerDialog.submitApplication')}
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
