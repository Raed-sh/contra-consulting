import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { FeaturedWork } from '@/components/work/FeaturedWork'
import { Footer } from '@/components/Footer'

export const metadata = {
  title:"Contra Consulting",
  description:
    "I'm a passionate developer, entrepreneur, and general technology enthusiast living in San Francisco. I've worked with hundreds of startups to help them develop their ideas into profitable businesses.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <FeaturedWork />
      <Footer newsletter={false}/>
    </>
  )
}
