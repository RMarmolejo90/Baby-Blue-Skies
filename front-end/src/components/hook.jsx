import React from 'react'
import { Slide } from 'react-awesome-reveal'
import frustratedImage from '../assets/images/frustrated.jpg';

export default function Hook() {
  return (
    <div className='bg-primary-light py-24 lg:p-20 flex flex-col lg:flex-row flex-wrap items-center justify-center'>
        <Slide duration={300}>
            <div className='lg:max-w-lg flex flex-col items-center justify-center' >    
                <img className='max-w-[100vw] xl:max-w-md lg:pr-4 lg:max-w-sm' src={frustratedImage} alt="frustrated man sitting on a beach" />
            </div>
            <div className='lg:pl-4 py-4'>
                <h2 className='p-4 w-full text-xl text-primary-dark font-semibold'>Know what's better than taking a vacation? </h2>
                <h4 className='p-4 lg:max-w-sm text-xl'>
                    Taking a vacation that doesn't 
                    make you want to rip your hair out. 
                </h4>
                <p className='p-4 lg:max-w-sm text-xl'>
                    Let Baby Blue Skies Travel handle the details 
                    so you can focus on the fun stuff - like deciding what swimsuit to pack.       
                </p>
            </div>
        </Slide>
        <Slide duration={300} cascade>
            <ul className='flex flex-wrap justify-around items-center p-4'>
                <li className="p-4 text-lg font-bold text-primary-dark"><h1>Cruise Trips</h1></li>
                <li className="p-4 text-lg font-bold text-primary-dark"><h1>Vacation Planning</h1></li>
                <li className="p-4 text-lg font-bold text-primary-dark"><h1>Tour Europe</h1></li>
                <li className="p-4 text-lg font-bold text-primary-dark"><h1>Caribbean Resorts</h1></li>            
                <li className="p-4 text-lg font-bold text-primary-dark"><h1>International Travel</h1></li>            
            </ul>
        </Slide>
    </div>
  )
}
