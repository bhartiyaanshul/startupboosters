import React from 'react'
import landingimage from './image.png'
import './IntroSection.css'
import partner1 from './partnerimages/stripe-seeklogo.com.svg'
import partner2 from './partnerimages/Component 49.svg'
import partner3 from './partnerimages/Component 52.svg'
import partner4 from './partnerimages/Component 50.svg'
import partner5 from './partnerimages/spotify-seeklogo.com 2.svg'
import partner6 from './partnerimages/Component 51.svg'
import partner7 from './partnerimages/zoom-seeklogo.com-1.svg'

export const IntroSection = () => {
    return (
        <div>
            <div className='introsection'>
                <div className='intro-section-content'>
                    <div className='intro-section-details'>
                        <div className='hey-text'>Hey, Everyone &#128075;</div>
                        <div className='intro-section-title'>Invest in the founder
                            Building the Future!
                        </div>
                        <div className='intro-section-subtext'>Get equity and front row seats to the startups  <br />
                        and small businesses you love—⁠for as little as $100.
                        </div>
                        <div className='button'>Explore</div>
                    </div>
                    <img className='intro-image' src={landingimage} alt='' />
                </div>
            </div>
            <div className='intro-section-divider'>
                <img className='divider-img' src={partner1} alt='' />
                <img className='divider-img' src={partner2} alt='' />
                <img className='divider-img' src={partner3} alt='' />
                <img className='divider-img' src={partner4} alt='' />
                <img className='divider-img' src={partner5} alt='' />
                <img className='divider-img' src={partner6} alt='' />
                <img className='divider-img' src={partner7} alt='' />
            </div>
        </div>
    )
}
