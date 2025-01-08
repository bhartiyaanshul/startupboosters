import React from 'react'
import './HomePage.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { IntroSection } from '../../components/IntroSection/IntroSection'
import { Features } from '../../components/Features/Features'
import { ServicesSection } from '../../components/ServicesSection/ServicesSection'
import { Feedback } from '../../components/Feedback/Feedback'
import Accordion from '../../components/Accordion/Accordion'
import { LetsStartSection } from '../../components/LetsStartSection/LetsStartSection'
import { Footer } from '../../components/Footer/Footer'
import Explore from '../../components/Explore/Explore'

export const HomePage = () => {
  return (
    <div className='landing-page'>
      <Navbar />
      <IntroSection />
      <Explore />
      <Accordion/>
      <LetsStartSection  />
      <Footer />
    </div>
  )
}
