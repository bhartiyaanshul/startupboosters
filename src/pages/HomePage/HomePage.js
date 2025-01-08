import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { IntroSection } from '../../components/IntroSection/IntroSection'
import Accordion from '../../components/Accordion/Accordion'
import { LetsStartSection } from '../../components/LetsStartSection/LetsStartSection'
import { Footer } from '../../components/Footer/Footer'
import Explore from '../../components/Explore/Explore'

const HomePage = () => {
  return (
    <div className='landing-page'>
      <Navbar />
      <IntroSection />
      <Explore />
      <Accordion />
      <LetsStartSection />
      <Footer />
    </div>
  )
}

export default HomePage
