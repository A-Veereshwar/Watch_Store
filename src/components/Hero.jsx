import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex h-5/6 w-full'>
        <div className='rounded-md py-0 bg-black flex justify-center items-center'>
            <img className='rounded-md w-full h-5/6 flex object-cover' src={assets.hero_img} alt="own your time tag line image" />
        </div>
    </div>
  )
}

export default Hero
