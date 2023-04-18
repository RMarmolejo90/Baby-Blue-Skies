import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
  return (
    <div>
        <Navbar />
        <h3 className='text-center py-6 bg-dark-shade text-4xl text-primary-light font-bold'>Contact Us</h3>
        <div className='px-20 py-10'>
            <p className='py-10'>We're thrilled that you're considering reaching out to us! 
            Our team is dedicated to helping you plan the perfect getaway and creating unforgettable experiences. Whether you need advice on choosing a destination, have questions about our services, or simply want to chat about all things travel, we're here to help. So drop us a line, and let's start planning your next adventure together! With our range of exciting activities and personalized recommendations,
            we're sure we can make your trip unforgettable.
            </p>
            <div className='flex flex-col items-center justify-between'>
                <ul className='text-primary-dark flex flex-col items-between justify-center text-center text-xl'>
                    <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><FontAwesomeIcon icon={faPhone} /><a href="tel:+13179366685">+1(317)936-6685</a></li>
                    <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><FontAwesomeIcon icon={faEnvelope} /> BabyBlueSkiesTravel@gmail.com</li>
                    <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><FontAwesomeIcon icon={faInstagram} /></li>
                    <li className='py-6 px-2 hover:border-b hover:cursor-pointer hover:border-primary-dark'><FontAwesomeIcon icon={faTiktok} /></li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
  )
}
