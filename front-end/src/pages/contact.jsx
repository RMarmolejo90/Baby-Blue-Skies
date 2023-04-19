import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Fade } from 'react-awesome-reveal'

export default function Contact() {
  return (
    <div>
        <Navbar />
        <Fade duration={3000} cascade damping={0.5}>
          <div className='px-20 py-10'>
              <h3 className='text-center text-4xl text-primary-dark font-bold'>Contact Us</h3>
              <p className='py-10'>We're thrilled that you're considering reaching out to us! 
              Our team is dedicated to helping you plan the perfect getaway and creating unforgettable experiences. 
              </p>
              <p className='pb-10'>
              Whether you need advice on choosing a destination, have questions about our services, or simply want to chat about all things travel, we're here to help. So drop us a line, and let's start planning your next adventure together! With our range of exciting activities and personalized recommendations,
              we're sure we can make your trip unforgettable.
              </p>
              <div className='flex flex-col items-center justify-between'>
                  <ul className='text-primary-dark flex flex-col items-between justify-center text-center text-xl'>
                      <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><a href="tel:+13179366685"><FontAwesomeIcon icon={faPhone} />+1(317)936-6685</a></li>
                      <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><a href="mailto:babyblueskiestravel@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> BabyBlueSkiesTravel@gmail.com</a></li>
                      <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><a href="https://www.facebook.com/babyblueskiestravelag" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebookF} /></a></li>
                      <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><a href="https://www.instagram.com/babyblueskiestravel/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} /></a></li>
                      <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><a href="https://www.tiktok.com/@babyblueskiestravel" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTiktok} /></a></li>
                  </ul>
              </div>
          </div>
        </Fade>
        <Footer />
    </div>
  )
}
