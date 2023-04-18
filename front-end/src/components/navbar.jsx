import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'




export default function Navbar() {
  
  const [toggleMenu, setToggleMenu] = useState('inactive');
  
  const handleMenuToggle = () => {
    toggleMenu === 'active' ? setToggleMenu('inactive') : setToggleMenu('active');
  }
  return (
    <div>        
      <div className='p-2 max-w-screen bg-dark-shade text-primary-dark flex flex-row flex-wrap justify-between items-center'>
        <h2 className='m-2 text-2xl'>Baby Blue Skies Travel</h2>         
        <button className='ml-auto' onClick={handleMenuToggle}><FontAwesomeIcon className='fa-2x text-white-shade hover:text-secondary-dark m-4' icon={faBars}/></button>
      </div>
      <div className={toggleMenu === 'active' ? "flex items-end ml-auto rounded-lg bg-dark-shade max-w-md flex-grow absolute" : "hidden" }>
        <ul className='flex flex-col justify-end items-start p-6 text-white-shade'>
          <li className='hover:text-secondary-dark'><Link to='/about'>About</Link> </li>
          <li className='hover:text-secondary-dark'><Link to='/'>Home</Link></li>
          <li className='hover:text-secondary-dark'><a href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform" target="_blank" rel="noopener noreferrer">Start a New Trip</a></li>
          <li className='hover:text-secondary-dark'><Link to='/contact'>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}
