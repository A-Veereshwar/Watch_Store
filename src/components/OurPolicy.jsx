import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-3 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className='pt-10'>
        <img src={assets.warranty_icon} className='w-10 m-auto mb-5' alt="our policy warranty" />
        <p className='font-semibold'>1+ Year Warranty</p>
        <p className='text-gray-400'>We offer minimum of 1 year Warranty</p>
      </div>
      <div className='pt-10'>
        <img src={assets.quality_icon} className='w-10 m-auto mb-5' alt="our policy quality" />
        <p className='font-semibold'>Quality Assured</p>
        <p className='text-gray-400'>Our products are tested and durable.</p>
      </div>
      <div className='pt-10'>
        <img src={assets.support_img} className='w-10 m-auto mb-5' alt="our policy quality" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 Customer Support.</p>
      </div>
    </div>
  )
}

export default OurPolicy
