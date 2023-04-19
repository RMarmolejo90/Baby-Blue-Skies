import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-dark-shade py-16' >
        {/* sitemap
        contact info */}
        <div className='flex items-center justify-center text-primary-light'>
          <h4 className='p-12'>BABY BLUE SKIES TRAVEL AGENCY</h4>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-between text-secondary-light'>
          <ul className='flex flex-col items-start justify-around p-10'>
            <li className='p-4 hover:text-secondary-dark hover:border-b-secondary-dark'><Link to='/about'>About</Link> </li>
            <li className='p-4 hover:text-secondary-dark hover:border-b-secondary-dark'><Link to='/'>Home</Link></li>
            <li className='p-4 hover:text-secondary-dark hover:border-b-secondary-dark'><Link to='/contact'>Contact Us</Link></li>              
          </ul>
          <ul className='flex flex-col items-start justify-around p-10'>
            <li className='p-4 hover:text-secondary-dark hover:border-b-secondary-dark'><a href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform" target="_blank" rel="noopener noreferrer">Start a New Trip</a></li>
            <li className='p-4 hover:text-secondary-dark hover:border-b-secondary-dark'><Link to='/unsubscribe'>Unsubscribe From Emails</Link></li>
            <li className='p-4 hover:text-secondary-dark hover:border-b-secondary-dark'><Link to='/subscribe'>Subscribe To Email Newsletter</Link></li>
          </ul>
          <ul className='flex flex-col items-start justify-around p-10'>
            <li className='p-4 hover:text-secondary-dark hover:border-b-secondary-dark'><a target='blank' href='https://www.facebook.com/babyblueskiestravelag'>Join Us On Facebook</a></li>
            <li className='p-4 hover:text-secondary-dark hover:border-b-secondary-dark'><a target='blank' href='https://www.instagram.com/babyblueskiestravel/'>Follow Us On Instagram</a></li>
            <li className='p-4 hover:text-secondary-dark hover:border-b-secondary-dark'><a target='blank' href='https://www.tiktok.com/@babyblueskiestravel'>Visit Us On TikTok</a></li>
          </ul>
        </div>

    </div>
  )
}
