import React from 'react'

export default function Hero() {
  return (
    <div className='mb-20 p-8 flex flex-col flex-wrap items-center justify-center min-h-[70vh] bg-[url(../src/assets/images/beach-landscape.jpg)] bg-cover bg-no-repeat'>
      <div className='text-center p-4 flex flex-col flex-wrap items-center justify-center mt-10 rounded-xl border-2 border-white-shade backdrop-blur-lg backdrop-contrast-200'> 
        <div className='bg-dark-shade p-6 rounded-xl border-white-shade flex flex-col flex-wrap flex-shrink items-center justify-center'>
          <h1 className='px-4 text-2xl font-bold text-primary-light'>BABY BLUE SKIES</h1>
          <h1 className='px-4 text-2xl text-primary-light'>Travel Agency</h1>          
          <h2 className='my-4 text-md font-bold text-white-shade'>
              Let's Start Planning Your Dream Vacation!
          </h2>
          {/* cta button */}
          <a className='p-2 m-4 tracking-wider leading-6 text-sm text-center bg-green-500 font-semibold border rounded-lg' href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform">
              Start A Trip Request
          </a>
        </div>
      </div> 
    </div>
  )
}
