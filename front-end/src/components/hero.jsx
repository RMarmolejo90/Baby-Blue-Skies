import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center'>
        <h1 className='p-4 text-4xl font-bold'>Baby Blue Skies Travel</h1>
        <h2 className='p-4 text-xl font-bold'>
            Escape. Explore. Enjoy. Let's Plan Your Vacation!
        </h2>
         {/* cta button */}
        <a className='p-3 m-4 text-sm bg-green-400 font-semibold border rounded-lg' href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform">
            Start A Trip Request
        </a>
    </div>
  )
}
