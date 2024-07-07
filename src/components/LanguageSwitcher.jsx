import { LanguageSwitcher, useSelectedLanguage } from 'next-export-i18n'
import { Menu, Transition } from '@headlessui/react'
import { MdOutlineLanguage } from 'react-icons/md'
import { IoChevronDown } from 'react-icons/io5'
import _ from 'lodash'
import { Fragment } from 'react'
import cn from '../helpers/cn'

const LanguageSwitcherWrapper = () => {
  const languageTable = {
    en: {
      en: 'English',
      ar: 'Arabic',
    },
    ar: {
      en: 'إنجليزية',
      ar: 'العربية',
    },
  }

  const { lang } = useSelectedLanguage()
  const options = _.entries(languageTable[lang])
  return (
    <Menu as="div" className="relative mx-1 inline-block text-left lg:mx-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <MdOutlineLanguage
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <IoChevronDown
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => {
              const selected = option[0] === lang
              const nativeVersion = languageTable[option[0]][option[0]]
              return (
                <Menu.Item key={option[0]}>
                  {({ active, close }) => (
                    <LanguageSwitcher lang={option[0]}>
                      <button
                        className={cn(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          selected ? 'font-bold' : 'font-normal',
                          'block px-4 py-2 text-sm'
                        )}
                        onClick={close}
                      >
                        {nativeVersion}
                      </button>
                    </LanguageSwitcher>
                  )}
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

    // <div className="flex items-center justify-center space-x-4 rounded-lg bg-gray-100 p-4 shadow-md">
    //   <LanguageSwitcher
    //     className={`rounded px-4 py-2 ${
    //       lang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
    //     }`}
    //     lang="en"
    //   >
    //     English
    //   </LanguageSwitcher>
    //   <LanguageSwitcher
    //     className={`rounded px-4 py-2 ${
    //       lang === 'ar' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
    //     }`}
    //     lang="ar"
    //   >
    //     Arabic
    //   </LanguageSwitcher>
    // </div>
  )
}

export default LanguageSwitcherWrapper
