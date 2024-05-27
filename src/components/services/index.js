import { Container } from '@/components/Container'
import ServiceComponent from './service'
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
            My goal is to create effective digital experiences that make
            people’s lives easier and better. I hope my work is a reflection of
            this.
          </p>
        </div>
        <div className="relative mx-auto mt-16 max-w-xl space-y-16  lg:mx-0 lg:max-w-none">
          {services.map((service) => (
            <ServiceComponent key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
