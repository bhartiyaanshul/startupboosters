import React from 'react'
import landingimage from './image.svg'
import founderfriendly from './Images/Fundingeasy.svg'
import buildbyfounders from './Images/builtbyfounders.svg'
import './RaiseMoneyPage.css'
import { LetsStartSection } from '../../components/HomePage/LetsStartSection/LetsStartSection'

const RaiseMoneyPage = () => {
    return (
        <div className='raise-money-page'>
            <div className='introsection'>
                <div className='intro-section-content'>
                    <div className='intro-section-details'>
                        <div className='intro-section-title'>Let your <br /> <span style={{ 'color': '#7577fb' }}>community</span> invest
                        </div>
                        <div className='intro-section-subtext'>Raise $50K to $5M+ from hundreds of customers, fans, and friends—all in one line on your cap table.
                        </div>
                        <div className='button'>Get Started</div>
                    </div>
                    <img className='intro-image' src={landingimage} alt='' />
                </div>
            </div>
            <img className='founder-friendly-img' src={founderfriendly} alt='' />
            <img className='built-by-founders-img' src={buildbyfounders} alt='' />
            <LetsStartSection />
        </div>
    )
}

export default RaiseMoneyPage