import React from 'react'

export default function Hero() {
  return (
    <div className='p-8 flex flex-col flex-wrap items-center justify-center min-h-[70vh] bg-[url(../src/assets/images/palm-hero.jpg)] bg-cover bg-no-repeat'>
      <div className='p-10 flex flex-col flex-wrap items-center justify-center mt-10 rounded-xl border-2 border-white-shade backdrop-blur-lg backdrop-contrast-200'> 
        <div className='bg-secondary-light p-8 rounded-lg flex flex-col flex-wrap flex-shrink items-center justify-center'>
          <h1 className='text-2xl font-bold text-primary-dark'>Baby Blue Skies Travel</h1>
          <h2 className='mb-4 text-md font-bold'>
              Escape. Explore. Enjoy. Let's Plan Your Vacation!
          </h2>
          {/* cta button */}
          <a className='p-2 m-4 text-sm text-center bg-green-500 font-semibold border rounded-lg' href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform">
              Start A Trip Request
          </a>
        </div>
      </div> 
    </div>
  )
}
