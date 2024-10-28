import { createContext } from "react";
import React, { useEffect, useState } from 'react'
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 40;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (itemId) =>{

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId]>=10){
                toast.error('Limit Reached');
                return;
            }
            else{
                cartData[itemId]+=1;
                setCartItems(cartData);
            }
        }else{
            cartData[itemId]=1;
            setCartItems(cartData);
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            totalCount+=cartItems[items];
        }
        return totalCount;
    }

    const value = {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;