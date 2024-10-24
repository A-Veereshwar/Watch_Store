import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Content = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=""/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Designed By:</p>
          <p className='text-gray-500'>Akula Veereshwar <br/>Email: <a href='mailto:veereshwar124@gmail.com' className='font-medium'>veereshwar124@gmail.com</a><br/><button className='border border-black px-8 my-3 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500' onClick={()=> window.open('https://www.linkedin.com/in/veereshwar-akula/','_blank')}>Linkedin</button></p>

          <p className='text-gray-500'>Molgara Sai Gritesh<br/>Email: <a href='mailto:saigritesh6923@gmail.com' className='font-medium'>saigritesh6923@gmail.com</a><br/><button className='border border-black px-8 my-3 py-2 text-sm hover:bg-black hover:text-white transition-all duration-500' onClick={()=> window.open('https://www.linkedin.com/in/sai-gritesh-277b86282/','_blank')}>Linkedin</button></p>
          
        </div>
      </div>
    </div>
  )
}

export default Content
