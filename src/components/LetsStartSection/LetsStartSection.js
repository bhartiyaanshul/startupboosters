import React from 'react'
import './LetsStartSection.css'

import searchicon from './Vector.png'

export const LetsStartSection = () => {
    return (
        <div className='lets-start-section'>
            <div className='lets-start-details'>
                <div className='lets-start-title'>Let`s Start Something Great</div>
                <div className='lets-start-subtext'>Sign up with your email adress to be informed about discounts and <br /> new recruits from all campaigns!</div>
                <div className='lets-start-email'>
                    <div style={{ 'display': 'flex', 'gap': '15px', 'margin-left': '15px' }}>
                        <img src={searchicon} alt='' />
                        <div className='lets-start-input'>Enter Your Email</div>
                    </div>
                    <div className='free-trial-button'>Free Trial</div>
                </div>

            </div>
        </div>
    )
}
