import React from 'react'
import './Footer.css'
import icon from './social icon.png'

export const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-top'>
            <div className='footer-newsify'>
                <div className='footer-company-name'>StartupBoosters</div>
                <div className='footer-company-desc'>StartupBoosters is your Email newsletter <br/>Webflow template we can build anything your dream.</div>
                <div className='try-for-free-button'>Try for free</div>
            </div>
            <div className='footer-details-services'>
                <div className='footer-details-title'>Company</div>
                <div className='footer-details-subtext'>About us</div>
                <div className='footer-details-subtext'>Home</div>
                <div className='footer-details-subtext'>Pricing</div>
                <div className='footer-details-subtext'>Demo</div>
                <div className='footer-details-subtext'>Contact us</div>
            </div>
            <div className='footer-details-services'>
                <div className='footer-details-title'>Support Us</div>
                <div className='footer-details-subtext'>Blog</div>
                <div className='footer-details-subtext'>Help center</div>
                <div className='footer-details-subtext'>FAQ's</div>
                <div className='footer-details-subtext'>Product updates</div>
            </div>
            <div className='footer-details-services'>
                <div className='footer-details-title'>Resources</div>
                <div className='footer-details-subtext'>Community</div>
                <div className='footer-details-subtext'>Contact</div>
                <div className='footer-details-subtext'>Terms of service</div>
            </div>
            {/* <div className='footer-details-services'>
                <div className='footer-details-title'>Address</div>
                <div className='footer-details-subtext'>Riverside 25, San Francisco, California View on Maps</div>
                <div className='footer-details-subtext'>Inquiries</div>
                <div className='footer-details-subtext'>+65 6156 5519 hello@Newsify.com</div>
                <img src={icon} alt='' />
            </div> */}
        </div>
        <div className='footer-section-bottom'>
            <div className='footer-section-line'></div>
            <div className='footer-section-bottom-text'>
                <div>© 2025 StartupBoosters. All rights reserved</div>    |
                <div> Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure</div>
            </div>
        </div>
    </div>
  )
}
