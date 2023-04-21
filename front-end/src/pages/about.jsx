import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Fade } from 'react-awesome-reveal'

export default function About() {
  return (
    <div>
        <Navbar />
        <Fade cascade damping={0.5} duration={3000}>
            <div className='p-8 lg:p-20'>
                <h2 className='text-primary-dark text-2xl font-bold lg:text-4xl text-center px-4 py-8'>About Us</h2>
                <p className='px-4 py-8'>
                    At Baby Blue Skies Travel Agency, we have been providing top-notch travel services to all our clients. Our passion for travel and commitment to excellence has made us one of the most trusted travel agencies in the industry.
                </p>
                <p className='px-4 py-8'>
                    Our mission is simple: to provide our clients with unforgettable travel experiences while taking care of all the details, so they can relax and enjoy their journey. 
                    Whether you're planning a romantic getaway, a family vacation, a solo trip, a tour, or a trip to another country, our experienced travel consultants are here to help you every step of the way.
                </p>
                <p className='px-4 py-8'>
                    We offer a wide range of travel services, including flight and hotel bookings, tour packages, cruises, and more. 
                    Our travel experts have extensive knowledge of destinations around the world and will work with you to create a customized itinerary that meets your needs and budget.
                </p>
                <p className='px-4 py-8'>
                    At Baby Blue Skies Travel Agency, we believe that travel is not just about visiting new places, but about creating lasting memories. 
                    That's why we go above and beyond to ensure that every aspect of your trip is perfect.
                    Thank you for considering Baby Blue Skies Travel Agency for all your travel needs. We look forward to helping you plan your next adventure!”
                </p>
            </div>
        </Fade>
        <Footer />
    </div>
  )
}

