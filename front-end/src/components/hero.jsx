import React from 'react'
import { Fade, Zoom } from 'react-awesome-reveal';

export default function Hero() {
  return (
    <div>
        <div className='pb-20 p-10 flex flex-col flex-wrap items-center justify-center min-h-[70vh] bg-[url(../src/assets/images/beach-landscape.jpg)] bg-cover bg-no-repeat'>
            <div className='shadow-inner mb-28 text-center p-6 pb-10 flex flex-col flex-wrap items-center justify-center mt-10 rounded-xl border backdrop-brightness-150 backdrop-blur-sm backdrop-saturate-50'> 
                <Fade delay={200} duration={3000}>
                    <h2 className='pb-8 m-4 text-3xl font-extrabold'>
                        Let's Start Planning Your Dream Vacation!
                    </h2>
                    {/* cta button */}
                    <Zoom delay={500} duration={2000}>
                        <a className='p-2 px-10 m-4 leading-6 tracking-wider text-sm bg-button-color font-semibold border rounded-md hover:border-dark-shade hover:shadow-lg' href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform">
                            Start A Trip Request
                    </a>
                    </Zoom>
                </Fade>
            </div>
        </div>
    </div>
  )
}
