import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faFacebook} from '@fortawesome/free-solid-svg-icons'



export default function Contact() {
  return (
    <div className='px-20'>
        <h3>Contact Us</h3>
        <p className='py-10'>We're thrilled that you're considering reaching out to us! 
        Our team is dedicated to helping you plan the perfect getaway and creating unforgettable experiences. Whether you need advice on choosing a destination, have questions about our services, or simply want to chat about all things travel, we're here to help. So drop us a line, and let's start planning your next adventure together! With our range of exciting activities and personalized recommendations,
         we're sure we can make your trip unforgettable.
        </p>
        <div className='flex flex-col items-center justify-between'>
            <ul>
                <li><FontAwesomeIcon icon={faPhone} /><a href="tel:+13179366685">+1(317)936-6685</a></li>
                <li><FontAwesomeIcon icon={faEnvelope} />BabyBlueSkiesTravel@gmail.com</li>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li>Instagram</li>
                <li>TikTok</li>
            </ul>
        </div>
    </div>
  )
}
