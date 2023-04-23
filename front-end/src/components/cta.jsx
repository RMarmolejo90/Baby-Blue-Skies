import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function Cta() {
  return (
    <div className='p-4 py-20 text-center flex items-center flex-col justify-center text-lg bg-secondary-light lg:px-20'>
     <Fade duration={2000}>
        {/* // image */}
        <h1 className='p-4 m-4 text-3xl font-semibold text-primary-dark gradient-logo' >Tired of staring at the same four walls?</h1>
        <h4 className='p-4 m-4' >
          Let us help you plan your next big adventure! Our expert travel agents will guide you every step of the way and make sure your trip is unforgettable. 
          Don't let your wanderlust go to waste - contact us today and let's start planning your dream escape!
        </h4>
        <a className='p-2 px-10 m-4 leading-6 tracking-wider text-sm bg-button-color font-semibold border rounded-md hover:border-dark-shade hover:shadow-lg' href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform">
            Start A New Trip
        </a>
      </Fade>
    </div>
  )
}
