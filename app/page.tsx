import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import BlogSection from '@/components/BlogSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Pricing />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
