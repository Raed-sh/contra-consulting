'use client'

import { useTranslation } from 'next-export-i18n'

const useServices = () => {
  const { t } = useTranslation()
  return [
    {
      title: t('homePage.services.services')[0].title,
      slug: 'strategic-hr-planning-and-organizational-development',
      description: t('homePage.services.services')[0].description,
      tags: [
        {
          key: t('homePage.services.services')[0].tags[0].key,
          value: t('homePage.services.services')[0].tags[0].value,
        },
        {
          key: t('homePage.services.services')[0].tags[1].key,
          value: t('homePage.services.services')[0].tags[1].value,
        },
        {
          key: t('homePage.services.services')[0].tags[2].key,
          value: t('homePage.services.services')[0].tags[2].value,
        },
        {
          key: t('homePage.services.services')[0].tags[3].key,
          value: t('homePage.services.services')[0].tags[3].value,
        },
        {
          key: t('homePage.services.services')[0].tags[4].key,
          value: t('homePage.services.services')[0].tags[4].value,
        },
      ],
      url: '',
      thumbnail: '/images/services/service-1.png',
    },
    {
      title: t('homePage.services.services')[1].title,
      slug: 'talent-acquisition-and-recruitment',
      description: t('homePage.services.services')[1].description,
      tags: [
        {
          key: t('homePage.services.services')[1].tags[0].key,
          value: t('homePage.services.services')[1].tags[0].value,
        },
        {
          key: t('homePage.services.services')[1].tags[1].key,
          value: t('homePage.services.services')[1].tags[1].value,
        },
        {
          key: t('homePage.services.services')[1].tags[2].key,
          value: t('homePage.services.services')[1].tags[2].value,
        },
      ],
      url: '',
      thumbnail: '/images/services/service-2.png',
    },
    {
      title: t('homePage.services.services')[2].title,
      slug: 'compliance-and-employee-relations',
      description: t('homePage.services.services')[2].description,
      tags: [
        {
          key: t('homePage.services.services')[2].tags[0].key,
          value: t('homePage.services.services')[2].tags[0].value,
        },
        {
          key: t('homePage.services.services')[2].tags[1].key,
          value: t('homePage.services.services')[2].tags[1].value,
        },
        {
          key: t('homePage.services.services')[2].tags[2].key,
          value: t('homePage.services.services')[2].tags[2].value,
        },
      ],
      url: '',
      thumbnail: '/images/services/service-3.png',
    },
    {
      title: t('homePage.services.services')[3].title,
      slug: 'talent-management',
      description: t('homePage.services.services')[3].description,
      tags: [
        {
          key: t('homePage.services.services')[3].tags[0].key,
          value: t('homePage.services.services')[3].tags[0].value,
        },
        {
          key: t('homePage.services.services')[3].tags[1].key,
          value: t('homePage.services.services')[3].tags[1].value,
        },
        {
          key: t('homePage.services.services')[3].tags[2].key,
          value: t('homePage.services.services')[3].tags[2].value,
        },
        {
          key: t('homePage.services.services')[3].tags[3].key,
          value: t('homePage.services.services')[3].tags[3].value,
        },
      ],
      url: '',
      thumbnail: '/images/services/service-4.png',
    },
    {
      title: t('homePage.services.services')[4].title,
      slug: 'hr-outsourcing-and-managed-services',
      description: t('homePage.services.services')[4].description,
      tags: [
        {
          key: t('homePage.services.services')[4].tags[0].key,
          value: t('homePage.services.services')[4].tags[0].value,
        },
        {
          key: t('homePage.services.services')[4].tags[1].key,
          value: t('homePage.services.services')[4].tags[1].value,
        },
        {
          key: t('homePage.services.services')[4].tags[2].key,
          value: t('homePage.services.services')[4].tags[2].value,
        },
      ],
      url: '',
      thumbnail: '/images/services/service-5.png',
    },
  ]
}

export default useServices
