import React from 'react'
import { Slide } from 'react-awesome-reveal'

export default function Hook() {
  return (
    <div className='bg-primary-light py-24 lg:p-20 flex flex-col lg:flex-row flex-wrap items-center justify-center'>
        <Slide duration={1000}>
            <div className='lg:max-w-lg flex flex-col items-center justify-center' >    
                <img className='max-w-[100vw] xl:max-w-md lg:pr-4 lg:max-w-sm' src="../src/assets/images/frustrated.jpg" alt="frustrated man sitting on a beach" />
            </div>
            <div className='lg:pl-4 py-4'>
                <h2 className='p-4 w-full text-xl text-primary-dark font-semibold'>Know what's better than taking a vacation? </h2>
                <h4 className='p-4 lg:max-w-sm text-xl'>
                    Taking a vacation that doesn't 
                    make you want to rip your hair out. 
                </h4>
                <h4 className='p-4 lg:max-w-sm text-xl'>
                    Let Baby Blue Skies Travel handle the details 
                    so you can focus on the fun stuff - like deciding what swimsuit to pack.       
                </h4>
            </div>
        </Slide>
    </div>
  )
}
