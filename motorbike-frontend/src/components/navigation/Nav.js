import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => (
    <div className='app-logo'>
        <h1>Book your Motorbike</h1>
        <ul className='nav-links'>
            <li><Link to='/Sign_up'>Login</Link></li>
            <li><Link to='/Registration'>Sign Up</Link></li>
            <li><Link to='/Home'>Home</Link></li>
        </ul>
    </div>
)