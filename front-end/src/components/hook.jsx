import React from 'react'

export default function Hook() {
  return (
    <div className='lg:p-8 flex flex-col lg:flex-row flex-wrap items-center justify-center'>
        <div className='max-w-md lg:max-w-lg' >    
            <h2 className='p-4 lg:max-w-md text-xl text-primary-dark font-semibold'>Know what's better than taking a vacation? </h2>
            <img className='max-w-sm lg:max-w-lg lg:pr-4 overflow-hidden' src="../src/assets/images/frustrated.jpg" alt="frustrated man sitting on a beach" />
        </div>
        <div className='lg:pl-4 py-4'>
            <h4 className='p-4 lg:max-w-md text-xl font-semibold'>
                Taking a vacation that doesn't 
                make you want to rip your hair out. 
            </h4>
            <h4 className='p-4 lg:max-w-md'>
                Let Baby Blue Skies Travel handle the details 
                so you can focus on the fun stuff - like deciding what swimsuit to pack.       
            </h4>
        </div>
    </div>
  )
}
