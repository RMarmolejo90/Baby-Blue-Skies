import React from 'react'
import { Fade, Slide, JackInTheBox } from 'react-awesome-reveal';

export default function Hero() {
  return (
    <div>
        <div className='pb-20 p-10 flex flex-col flex-wrap items-center justify-center min-h-[70vh] bg-[url(../src/assets/images/beach-landscape.jpg)] bg-cover bg-no-repeat'>
            <Fade delay={1000} duration={2000}>
                <div className='shadow-inner  text-center p-6 pb-10 flex flex-col flex-wrap items-center justify-center mt-10 rounded-xl border'> 
                    <h2 className='pb-8 m-4 text-3xl font-bold'>
                        Let's Start Planning Your Dream Vacation!
                    </h2>
                    {/* cta button */}
                    <JackInTheBox delay={1500} duration={2000}>
                        <a className='p-3 mx-4 my-8 tracking-wider leading-6 text-md text-center bg-green-500 font-bold border rounded-md' href="https://docs.google.com/forms/d/e/1FAIpQLScvZkBlv69f74k6q7XJ9szgq_JoZR9Nhug3dsN67I06iQ5Neg/viewform">
                            Start A Trip Request
                    </a>
                    </JackInTheBox>
                </div>
            </Fade>
        </div>
    </div>
  )
}
