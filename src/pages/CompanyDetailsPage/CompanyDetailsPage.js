import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './CompanyDetailsPage.css'

const CompanyDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  const usersInvested = 75; // Example value, you can replace it with dynamic data
  const totalUsers = 100;
  const progressPercentage = (usersInvested / totalUsers) * 100;

  const handleInvestNow = () => {
    navigate('/checkout');
  };

  return (
    <div className='company-details-page'>
      <div className='company-header'>
        <div className='company-details-name'>Invest in {name}</div>
        <div className='company-desc'>{description}</div>
      </div>
      <img className='company-image' src={image} alt='' />
      <div className='company-details'>
        <div className='company-details-section'>
          <div className='company-details-title'>Company Overview</div>
          <div className='company-details-content'>{longDesc}</div>
        </div>
        <div className='company-details-section'>
          <div className='company-details-subtitle'>Founders</div>
          <div className='company-details-content'>{founders}</div>
        </div>
        <div className='company-details-section'>
          <div className='company-details-subtitle'>Overview</div>
          <div className='company-details-content'>{overview}</div>
        </div>
        <div className='company-details-section'>
          <div className='company-details-subtitle'>Mission</div>
          <div className='company-details-content'>{mission}</div>
        </div>
        <div className='company-details-section'>
          <div className='company-details-subtitle'>Vision</div>
          <div className='company-details-content'>{vision}</div>
        </div>
        <div className='company-details-section'>
          <div className='company-details-subtitle'>Services</div>
          <div className='company-details-content'>{services}</div>
        </div>
        <div className='company-details-section'>
          <div className='company-details-subtitle'>Features</div>
          <div className='company-details-content'>{features}</div>
        </div>
      </div>
      <div className='checkout-box'>
        <div className='checkout-info'>
          <div className='checkout-users'>{usersInvested} out of {totalUsers} users invested</div>
          <div className='progress-bar'>
            <div className='progress' style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <button className='checkout-button' onClick={handleInvestNow}>Invest Now</button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailsPage

