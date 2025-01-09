import React from 'react'
import landingimage from './image.svg'
import './RaiseMoneyPage.css'

const RaiseMoneyPage = () => {
    return (
        <div>
            <div className='introsection'>
                <div className='intro-section-content'>
                    <div className='intro-section-details'>
                        <div className='intro-section-title'>Let your <br /> <span style={{'color':'#7577fb'}}>community</span> invest
                        </div>
                        <div className='intro-section-subtext'>Raise $50K to $5M+ from hundreds of customers, fans, and friends—all in one line on your cap table.
                        </div>
                        <div className='button'>Get Started</div>
                    </div>
                    <img className='intro-image' src={landingimage} alt='' />
                </div>
            </div>
        </div>
    )
}

export default RaiseMoneyPage