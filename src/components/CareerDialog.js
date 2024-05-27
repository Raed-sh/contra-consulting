'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Button } from './Button'

const CareerDialog = () => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant=""
        className={'bg-accent text-white'}
        onClick={() => setIsOpen(true)}
      >
        Apply for Career
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
                  action="https://fabform.io/f/YOUR_FORM_ID"
                  method="POST"
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
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-medium text-accent"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="resume"
                      className="block font-medium text-accent"
                    >
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant=""
                      className="rounded-md bg-secondary px-4 py-2 text-accent transition duration-300 ease-in-out hover:bg-primary hover:text-white"
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
