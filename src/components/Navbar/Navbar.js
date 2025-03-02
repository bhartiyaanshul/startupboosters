import React from 'react'
import './Navbar.css'
import searchicon from './Vector.png'
// import profileicon from './profileicon.png' // Import the profile icon
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <NavLink to='/' className='company-name'>StartupBoosters</NavLink>
            <div className='navbar-content'>
                <div className='navbar-pages'>
                    <NavLink to='/' className='navbar-page'>Home</NavLink>
                    <NavLink to='/explore' className='navbar-page'>Explore</NavLink>
                    <NavLink to='/raise-money' className='navbar-page'>Raise Money</NavLink>
                </div>
                <div className='navbar-buttons'>
                    <NavLink to='/auth' className='register-button'>Register</NavLink>
                    <NavLink to='/profile' className='profile-icon'>
                        <div className="profile-fallback">AS</div> {/* Fallback colored circle */}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
