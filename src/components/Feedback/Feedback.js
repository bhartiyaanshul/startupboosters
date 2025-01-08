import React from 'react'
import './Feedback.css' 
import { Carose } from '../Carose/Carose'
import waves from './Component 1.png'
import avatar from './Rectangle 70.png'
import rating from './Component 29.png'
import quotes from './image.png';

export const Feedback = () => {
  return (
    <div className='feedback-section'>
        <div className='feedback-section-details'>
            <div className='feedback-section-text'>
                <div className='feedback-details-title'>The <span style={{'color':'#1668E8'}}>Cutomer is Hero</span> of Our Business</div>
                <div className='feedback-details-subtext'>Newsify is your Email newsletter Webflow template we can build anything your dream.</div>
            </div>
            <Carose />
        </div>
        <div className='customer-feedbacks'>
            <img src={waves}  alt='' className='waves' />
            <img src={quotes} alt='' className='quotes' />
            <div className='customer-feedback-message'>I cant describe how great we feel using Newsify. It completely changed our workflow and the face we waste on truying to connect each other.Top Newsify!”</div>
            <div className='customer-info'>
                <img className='customer-image' alt='' src={avatar} />
                <div className='customer-data'>
                    <div className='customer-name'>Esther Jackson</div>
                    <img className='customer-rating' alt='' src={rating} />
                </div>
            </div>
        </div>
    </div>
  )
}
