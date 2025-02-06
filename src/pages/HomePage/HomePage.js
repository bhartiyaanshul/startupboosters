import React from 'react'
import { IntroSection } from '../../components/IntroSection/IntroSection'
import Accordion from '../../components/Accordion/Accordion'
import { LetsStartSection } from '../../components/LetsStartSection/LetsStartSection'
import { Footer } from '../../components/Footer/Footer'
import Explore from '../../components/Explore/Explore'

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
