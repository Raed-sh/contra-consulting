import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import  Services  from '@/components/services'
import { Footer } from '@/components/Footer'

export const metadata = {
  title:"Contra | HR and Consultation Company",
  description:
    "We provide top-notch HR and consultation services to help your business thrive.",
    keywords:["HR", "consultation", "business in jordan","HR in jordan","Business", "management" ]

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
