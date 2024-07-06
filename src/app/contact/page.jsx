import { Footer } from '@/components/Footer'
import Contact from './(Contact)'

export const metadata = {
  title: 'Contact us',
  description:
    "Whether you're looking to kickstart a new project or simply want to say hi, feel free to get in touch.",
}

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  )
}
