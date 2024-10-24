import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p><b className='font-medium'>O'Clock24</b> was founded with a deep passion for timeless design and precision craftsmanship. What started as a personal collection of handpicked watches soon blossomed into a full-scale store dedicated to offering high-quality timepieces for every style and occasion. From classic analog designs that celebrate tradition to modern, cutting-edge smartwatches, our carefully curated collection reflects our commitment to quality and sophistication.</p>
            <p>At the heart of our journey is a desire to share our love for horology with fellow watch enthusiasts. We believe that a watch is more than just a functional accessory—it's a statement of personal style and a symbol of enduring craftsmanship. Every piece in our collection is chosen with care, ensuring that our customers receive only the best in design, performance, and reliability.</p>
            <b className='text-gray-800'>OUR MISSION</b>
            <p><b className='font-medium'>O'Clock24</b> started as a small passion project, dedicated to curating exceptional timepieces. Over time, it has evolved into a trusted brand, offering a diverse collection of watches that seamlessly blend tradition and innovation. Our journey is driven by a deep love for craftsmanship and an unwavering commitment to delivering excellence.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At <b className='font-medium'>O'Clock24</b>, every watch undergoes strict quality checks to ensure top-tier craftsmanship, precision, and durability. We are committed to delivering reliable timepieces that exceed customer expectations.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At <b className='font-medium'>O'Clock24</b>, we ensure a seamless shopping experience with a user-friendly website and fast shipping. Enjoy hassle-free returns so you can shop with confidence.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Customer Service:</b>
          <p className='text-gray-600'>At <b className='font-medium'>O'Clock24</b>, exceptional customer service is our priority. Our dedicated support team is available to assist you with any inquiries or concerns, ensuring a satisfying shopping experience from start to finish.</p>
        </div>

      </div>

    </div>
  )
}

export default About
