import React from 'react'
import './Explore.css'
import investors from './Investor-explore.svg'
import whyinvest from './why-invest.svg'
import newToInvesting from './new-to-investing.svg'


const Explore = () => {
    return (
        <div className='explore-section'>
            <div className='explore-startups'>
                <div className='explore-heading'>Explore startups raising now</div>
                <div className='explore-sub-heading'>Backed by top VCs and notable angels</div>
                <div className='button'>Explore Startups</div>
            </div>
            <div className='explore-investors'>
                <div className='explore-heading'>Co-invest with VCs and <br/> professional angels</div>
                <div className='explore-sub-heading'>On the same terms, using the same tools.</div>
                <img src={investors} alt='' className='explore-investor-image'/>
                <div className='button'>Explore Investors</div>
            </div>
            <img src={whyinvest} alt='' className='why-invest-image'/>
            <img src={newToInvesting} alt='' className='why-invest-image'/>
        </div>
    )
}

export default Explore