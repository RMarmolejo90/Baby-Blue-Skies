import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <div className='bg-dark-shade py-16' >
        <div className='flex items-center justify-center text-primary-light'>
          <h4 className='p-12 text-2xl font-extralight'>BABY BLUE SKIES TRAVEL AGENCY</h4>
        </div>
        <div className='flex flex-row font-light text-sm flex-wrap justify-center items-between text-secondary-light'>
          <ul className='flex lg:flex-col items-start justify-around lg:p-10 py-6'>
            <li className='p-2'><Link className='p-2 m-2 hover:text-secondary-dark hover:border-b hover:border-secondary-dark' onClick={scrollToTop} to='/about'>About</Link> </li>
            <li className='p-2'><Link className='p-2 m-2 hover:text-secondary-dark hover:border-b hover:border-secondary-dark' onClick={scrollToTop} to='/'>Home</Link></li>
            <li className='p-2'><Link className='p-2 m-2 hover:text-secondary-dark hover:border-b hover:border-secondary-dark' onClick={scrollToTop} to='/contact'>Contact Us</Link></li>              
          </ul>
          <ul className='flex lg:flex-col items-start justify-around lg:p-10 py-6'>
            <li className='p-2'><Link className='p-2 m-2 hover:text-secondary-dark hover:border-b hover:border-secondary-dark' onClick={scrollToTop} to='/subscribe'>Subscribe To Email Newsletter</Link></li>
            <li className='p-2'><a className='p-2 m-2 hover:text-secondary-dark hover:border-b hover:border-secondary-dark' href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform" target="_blank" rel="noopener noreferrer">Start a New Trip</a></li>
            <li className='p-2'><Link className='p-2 m-2 hover:text-secondary-dark hover:border-b hover:border-secondary-dark' onClick={scrollToTop} to='/unsubscribe'>Unsubscribe From Emails</Link></li>
          </ul>
          <ul className='flex lg:flex-col items-start justify-around lg:p-10 py-6'>
            <li className='p-2'><a className='p-2 m-2 hover:text-secondary-dark hover:border-b hover:border-secondary-dark' target='blank' href='https://www.facebook.com/babyblueskiestravelag'>Join Us On Facebook</a></li>
            <li className='p-2'><a className='p-2 m-2 hover:text-secondary-dark hover:border-b hover:border-secondary-dark' target='blank' href='https://www.instagram.com/babyblueskiestravel/'>Follow Us On Instagram</a></li>
            <li className='p-2'><a className='p-2 m-2 hover:text-secondary-dark hover:border-b hover:border-secondary-dark' target='blank' href='https://www.tiktok.com/@babyblueskiestravel'>Visit Us On TikTok</a></li>
          </ul>
        </div>

    </div>
  )
}
