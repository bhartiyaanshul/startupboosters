import React from 'react'
import { Navbar } from '../../components/HomePage/Navbar/Navbar'
import { IntroSection } from '../../components/HomePage/IntroSection/IntroSection'
import Accordion from '../../components/HomePage/Accordion/Accordion'
import { LetsStartSection } from '../../components/HomePage/LetsStartSection/LetsStartSection'
import { Footer } from '../../components/HomePage/Footer/Footer'
import Explore from '../../components/HomePage/Explore/Explore'

const HomePage = () => {
  return (
    <div>
      <IntroSection />
      <Explore />
      <Accordion />
      <LetsStartSection />
    </div>
  )
}

export default HomePage
