import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);  
  const [image,setImage] = useState('')


  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  },[productId]);

return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%]sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt=''/>
              ))
            }

          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt=''></img>
          </div>
        </div>
        
        <div className='flex-1'>
          <h1 className='font-medium text-xl mt-2'>{productData.name} - {productData.model}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_icon} alt='' className='w-3 5' />
            <img src={assets.star_dull_icon} alt='' className='w-3 5' />
            <p className='pl-2'>{99}</p>
          </div>
          <p className='mt-5 text-2xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-xl font-medium'>Specifications:</p>
          <ul className='mt-2'>
            <li className='text-sm m-1'><b className='font-medium'>• Gender: </b> {productData.category}</li>
            <li className='text-sm m-1'><b className='font-medium'>• Display: </b> {productData.subCategory}</li>
            <li className='text-sm m-1'><b className='font-medium'>• Strap Material: </b> {productData.strapMaterial}</li>
            <li className='text-sm m-1'><b className='font-medium'>• Water Resistant: </b> {productData.waterResistant}</li>
            <li className='text-sm m-1'><b className='font-medium'>• Warranty: </b> {productData.warranty}</li>
          </ul>
          <button onClick={()=>addToCart(productData._id)} className='mt-5 bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>

          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Terms & Conditions</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>• Items may be returned within 30 days in their original condition for a full refund, excluding any shipping fees.</p>
          <p>• Products may vary slightly in color and appearance due to image display variations and manufacturing differences.</p>
          <p>• Customer information is secure and used solely for processing and delivering orders as per our privacy policy.</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
