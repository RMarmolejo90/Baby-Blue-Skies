import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-awesome-reveal";



export default function Navbar() {
  
  const [toggleMenu, setToggleMenu] = useState('inactive');
  
  const handleMenuToggle = () => {
    toggleMenu === 'active' ? setToggleMenu('inactive') : setToggleMenu('active');
  }
  return (
    <div>  
      <div className='p-2 max-w-screen bg-dark-shade text-white-shade flex flex-row flex-wrap justify-between items-center'>
          <h2 className='m-2 text-lg font-bold text-primary-light'>Baby Blue Skies Travel</h2>         
          <button className='ml-auto' onClick={handleMenuToggle}><FontAwesomeIcon className='fa-2x text-white-shade hover:text-secondary-dark m-4' icon={faBars}/></button>     
      </div>
        <div className={toggleMenu === 'active' ? " rounded-b-xl shadow-xl bg-dark-shade max-w-sm absolute top-20 right-0 z-20" : "hidden" }>
          <div>            
            <ul className='flex flex-col justify-end items-start p-6 text-white-shade'>     
              <li className='hover:text-secondary-dark'><Link to='/about'>About</Link> </li>
              <li className='hover:text-secondary-dark'><Link to='/'>Home</Link></li>
              <li className='hover:text-secondary-dark'><a href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform" target="_blank" rel="noopener noreferrer">Start a New Trip</a></li>
              <li className='hover:text-secondary-dark'><Link to='/contact'>Contact Us</Link></li>              
            </ul>
          </div> 
        </div>
    </div>
  )
}
