import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div>
            <img className='mb-5 w-32' src={assets.logo} alt=''></img>
            <p className='w-full md:w-2/3 text-gray-600'><b className='font-medium'>O'Clock24</b> was founded with a deep passion for timeless design and precision craftsmanship. What started as a personal collection of handpicked watches soon blossomed into a full-scale store dedicated to offering high-quality timepieces for every style and occasion.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Account</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+040-123-456-0000</li>
                <li><a href='mailto:veereshwar124@gmail.com' >veereshwar124@gmail.com</a></li>
                <li><a href='mailto:saigritesh6923@gmail.com' >saigritesh6923@gmail.com</a></li>
            </ul>
        </div>

      </div>

      <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ O'Clock24.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
