import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => (
    <section className='nav-wrapper'>
    <div className='app-logo'>
        <h1 className='nav-header'>Book your Motorbike</h1>
        <ul className='nav-links-ul'>
            <li className='nav-links-li' nav-links-li><Link to='/Sign_up' className='nav-link'>Login</Link></li>
            <li className='nav-links-li'><Link to='/Registration' className='nav-link'>Sign Up</Link></li>
            <li className='nav-links-li'><Link to='/Home' className='nav-link'>Home</Link></li>
        </ul>
    </div>
    </section>
)