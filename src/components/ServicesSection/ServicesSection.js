import React from 'react'
import './ServicesSection.css'

import service1 from './serviceimage/service1.png'
import service2 from './serviceimage/service2.png'
import service3 from './serviceimage/service3.png'
import service4 from './serviceimage/service4.png'

export const ServicesSection = () => {
  return (
    <div className='services'>
        <div className='services-headline'>
            <div className='service-headline-title'>More than a Newsletter</div>
            <div className='service-headline-subtext'>Unlock the automated quality experience for everyone in the team.</div>
        </div>
        <div className='service-grid'>
            <div className='service'>
                <img className='service-img' src={service1} alt='' />
                <div className='service-content'>
                  <div className='service-title'>Collect the needed information <br/>and see the result easily</div>
                  <div className='service-subtext'>Help your members find wjat matters to them Collect informations and creates graphics for them to understand their values. To have a smooth experience all members need a bit of guidence.</div>
                  <div className='get-start-button'>Get start for free</div>
                </div>
            </div>
            <div className='service'>
                <img className='service-img' src={service2} alt='' />
                <div className='service-content'>
                  <div className='service-title'>Use the analyzer AI to track  <br/> your reports</div>
                  <div className='service-subtext'>A strong community could be lead by a strong guidence only. The guide in this tour may be automized already. Our analyzier Ai will track the parameters and will come real life reports</div>
                  <div className='get-start-button'>Get start for free</div>
                </div>
            </div>
            <div className='service'>
                <img className='service-img' src={service3} alt='' />
                <div className='service-content'>
                  <div className='service-title'>Publish in one touch</div>
                  <div className='service-subtext'>Everything is under you control you can schedule your announcement plan your feeds and create posts with one click Being the right thing in the right time.</div>
                  <div className='get-start-button'>Get start for free</div>
                </div>
            </div>
            <div className='service'>
                <img className='service-img' src={service4} alt='' />
                <div className='service-content'>
                  <div className='service-title'>Connection is the key</div>
                  <div className='service-subtext'>When a member replied to another, they get the connection flow. This way we improve general efficeny of the team</div>
                  <div className='get-start-button'>Get start for free</div>
                </div>
            </div>
        </div>
    </div>
  )
}
