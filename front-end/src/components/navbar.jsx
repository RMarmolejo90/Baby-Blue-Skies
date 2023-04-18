import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const [toggleMenu, setToggleMenu] = useState('inactive');

const handleMenuToggle = () => {
  toggleMenu === 'active' ? setToggleMenu('inactive') : setToggleMenu('active');
}

export default function Navbar() {
  return (
    <div className='p-6 w-screen bg-slate-200 text-primary-dark flex flex-row flex-wrap justify-between items-center'>
        
        <h2 className='m-2'>Baby Blue Skies Travel</h2>
        <div>
          <ul>
            <li><Link to='/about'>About</Link> </li>
            <li><Link to='/'>Home</Link></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform" target="_blank" rel="noopener noreferrer">Start a New Trip</a></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>

    </div>
  )
}
