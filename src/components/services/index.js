import { Container } from '@/components/Container'
import ServiceCard from './ServiceCard'
import { services } from '../../constants'

function Services() {
  return (
    <section className="overflow-x-clip bg-white pb-16 pt-8 sm:pb-24 sm:pt-12 md:pt-16">
      <Container>
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold text-[#00215E] sm:text-5xl">
            Check out our Services
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-slate-700 sm:mt-5">
            Our goal is to deliver innovative HR solutions that enhance
            workplace efficiency and employee satisfaction.
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
