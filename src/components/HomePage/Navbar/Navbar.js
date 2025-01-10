import React from 'react'
import './Navbar.css'
import searchicon from './Vector.png'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='company-name'>StartupBoosters</div>
            <div className='navbar-content'>
                <div className='navbar-pages'>
                    <NavLink to='/' className='navbar-page'>Home</NavLink>
                    <NavLink to='/explore' className='navbar-page'>Explore</NavLink>
                    <NavLink to='/raise-money' className='navbar-page'>Raise Money</NavLink>
                </div>
                <div className='navbar-buttons'>
                    <div className='search-section'>
                        <img src={searchicon} alt='' />
                        <span>Search</span>
                    </div>
                    <div className='register-button'>Register</div>
                </div>
            </div>

        </div>
    )
}
