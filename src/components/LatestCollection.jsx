import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Collection from '../pages/Collection';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const {products} = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[])

  return (
    <div>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest'} text2={'Collections'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Step into the future of style with our latest watches. 
            Built to elevate every moment, these pieces blend timeless elegance with modern flair to suit every adventure.
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
    </div>
  )
}

export default LatestCollection
