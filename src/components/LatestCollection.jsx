import React, { useContext } from 'react'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Collection from '../pages/Collection';

const LatestCollection = () => {

  const {products} = useContext(ShopContext);

  return (
    <div>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Collections'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover a curated collection of timeless watches from the world's most trusted brands, 
            blending heritage, precision, and modern elegance in every piece.
            </p>
        </div>
    </div>
  )
}

export default LatestCollection
