import React from 'react'
import { useLocation } from 'react-router-dom';
import './CompanyDetailsPage.css'

const CompanyDetailsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get('name');
  const description = queryParams.get('description');
  const longDesc = queryParams.get('longDesc');
  const image = queryParams.get('image');
  const founders = queryParams.get('founders');
  const overview = queryParams.get('overview');
  const mission = queryParams.get('mission');
  const vision = queryParams.get('vision');
  const services = queryParams.get('services');
  const features = queryParams.get('features');

  return (
    <div className='comapany-details-page'>
      <div className='company-details-name'>Invest in {name}</div>
      <div className='company-desc'>{description}</div>
      <div className='company-image-container'>
        <img className='company-image' src={image} alt='' />
        <div className='company-image-button'>
          <div className='button'>Invest</div>
        </div>
      </div>

      <div className='company-details'>
        <div className='company-details-title'>Company overview</div>
        <div className='company-details-subtitle'>description</div>
        <div className='company-long-desc'>{longDesc}</div>
        <div className='company-details-subtitle'>Founders</div>
        <div className='company-long-desc'>{founders}</div>
        <div className='company-details-subtitle'>Overview</div>
        <div className='company-long-desc'>{overview}</div>
        <div className='company-details-subtitle'>Mission</div>
        <div className='company-long-desc'>{mission}</div>
        <div className='company-details-subtitle'>Vision</div>
        <div className='company-long-desc'>{vision}</div>
        <div className='company-details-subtitle'>Services</div>
        <div className='company-long-desc'>{services}</div>
        <div className='company-details-subtitle'>Features</div>
        <div className='company-long-desc'>{features}</div>
      </div>
    </div>
  );
}

export default CompanyDetailsPage

