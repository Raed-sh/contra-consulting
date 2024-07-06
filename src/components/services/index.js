'use client'
import { Container } from '@/components/Container'
import ServiceCard from './ServiceCard'
import { useTranslation } from 'next-export-i18n'
import useServices from '../../hooks/useServices'

function Services() {
  const { t } = useTranslation()
  const services = useServices()
  return (
    <section className="overflow-x-clip bg-white pb-16 pt-8 sm:pb-24 sm:pt-12 md:pt-16">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold text-[#00215E] sm:text-5xl">
            {t('homePage.services.heading')}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-slate-700 sm:mt-5">
            {t('homePage.services.description')}
          </p>
        </div>
        <div className="relative mx-auto mt-16 max-w-xl space-y-16  lg:mx-0 lg:max-w-none">
          {services.map((service, index) => (
            <ServiceCard key={`service-card-${index * 1}`} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
