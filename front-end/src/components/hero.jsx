import React from 'react'

export default function Hero() {
  return (
    <div className='mb-20 p-10 flex flex-col flex-wrap items-center justify-center min-h-[70vh] bg-[url(../src/assets/images/beach-landscape.jpg)] bg-cover bg-no-repeat'>
      <div className='text-center p-4 flex flex-col flex-wrap items-center justify-center mt-10 rounded-xl border-2 border-white-shade backdrop-blur-lg backdrop-contrast-200'> 
        <div className=' p-2 rounded-xl border-white-shade flex flex-col flex-wrap flex-shrink items-center justify-center'>
          <h2 className='my-4 text-3xl font-semibold'>
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
