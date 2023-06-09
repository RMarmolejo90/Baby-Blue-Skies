import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Slide, Roll } from 'react-awesome-reveal';



export default function Navbar() {
  
  const [toggleMenu, setToggleMenu] = useState('inactive');
  
  const handleMenuToggle = (e) => {
    e.preventDefault()
    toggleMenu === 'active' ? setToggleMenu('inactive') : setToggleMenu('active');
  }
  return (
    <div> 
      <div className=' max-w-screen bg-white-shade font-semibold text-dark-shade flex flex-row flex-wrap justify-between items-center'>        
        <div className='flex flex-col p-2 pl-8 pr-auto items-start justify-center'>
          <Link to='/'><h2 className='text-2xl pr-auto gradient-logo tracking-wide'>Baby Blue Skies</h2></Link>
          <h1 className='text-dark-shade text-sm font-thin font-logo leading-3 tracking-widest'>Online Travel Agency</h1>                
        </div>
        <Roll cascade delay={0.1} duration={3000}>
          <button className='ml-auto' onClick={handleMenuToggle}><FontAwesomeIcon className='fa-2x text-dark-shade hover:text-secondary-dark m-4' icon={faBars}/></button>     
        </Roll>
      </div>
      <div className={toggleMenu === 'active' ? " rounded-xl shadow-xl bg-white-shade max-w-sm absolute top-20 right-0 z-20" : "hidden" }>
        <div className='z-20'>         
          <Slide down cascade duration={400}>         
            <ul className='flex flex-col justify-end items-start p-6 text-dark-shade'>     
              <li className='p-4 font-semibold hover:text-accent-color'><Link to='/'>Home</Link></li>
              <li className='p-4 font-semibold hover:text-accent-color'><Link to='/about'>About</Link> </li>
              <li className='p-4 font-semibold hover:text-accent-color'><a href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform" target="_blank" rel="noopener noreferrer">Start a New Trip</a></li>
              <li className='p-4 font-semibold hover:text-accent-color'><Link to='/contact'>Contact Us</Link></li>              
            </ul>          
          </Slide> 
        </div> 
      </div>
    </div>
  )
}
