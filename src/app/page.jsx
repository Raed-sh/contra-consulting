import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import  Services  from '@/components/services'
import { Footer } from '@/components/Footer'

export const metadata = {
  title:"HR and Consultation Company | Contra",
  description:
    "We provide top-notch HR and consultation services to help your business thrive.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <Footer newsletter={false}/>
    </>
  )
}
