import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');

  const toggleCategory = (event) => {
    if(category.includes(event.target.value)){
      setCategory(prev => prev.filter(item => item != event.target.value))
    }else{
      setCategory(prev => [...prev, event.target.value])
    }
  }

  const toggleSubCategory = (event) => {
    if(subCategory.includes(event.target.value)){
      setSubCategory(prev => prev.filter(item => item != event.target.value))
    }else{
      setSubCategory(prev => [...prev, event.target.value])
    }
  }

  const toggleBrand = (event) => {
    if(brand.includes(event.target.value)){
      setBrand(prev => prev.filter((item) => item != event.target.value));
    }else{
      setBrand(prev => [...prev, event.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    if(brand.length > 0){
      productsCopy = productsCopy.filter(item => brand.includes(item.company));
    }

    setFilterProducts(productsCopy);
  }

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();
    switch(sortBy){
      case 'low-high':
        setFilterProducts(filterProductCopy.sort((a,b)=> a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(filterProductCopy.sort((a,b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  },[category, subCategory, brand, search, showSearch])

  useEffect(() => {
    sortProduct();
  },[sortBy]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS 
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Dropdown Icon" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'}  onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Unisex'} onChange={toggleCategory}/> Unisex
            </p>
          </div>
        </div>
        {/* subCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUB-CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Analog'} onChange={toggleSubCategory} /> Analog
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Digital'} onChange={toggleSubCategory} /> Digital
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Smart'} onChange={toggleSubCategory} /> Smart
            </p>
          </div>
        </div>
        {/* Brand */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Brand</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Fastrack'} onChange={toggleBrand} /> Fastrack
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Timex'}  onChange={toggleBrand} /> Timex
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Casio'} onChange={toggleBrand} /> Casio
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Apple'} onChange={toggleBrand} /> Apple
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Samsung'} onChange={toggleBrand} /> Samsung
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Boat'} onChange={toggleBrand} /> Boat
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Peter England'} onChange={toggleBrand} /> Peter England
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Titan'} onChange={toggleBrand} /> Titan
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Noise'} onChange={toggleBrand} /> Noise
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Fossil'} onChange={toggleBrand} /> Fossil
            </p>
          </div>
        </div>
      </div>
      {/* Collections Display  */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collections'}/>
          {/* product sort  */}
          <select onChange={(event) => setSortBy(event.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevance">Sort by: Relevance</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Display products  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
