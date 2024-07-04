import { createContext, useState, useEffect } from "react";
import {all_products} from '../constants/products'
import { getCookie, makePostRequest, makeGetRequest, errorMsg, successMsg } from '../hooks'
import axios from "axios";

export const ShopContext = createContext(null)

const token = getCookie("auth_token")

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState(all_products)
    const [cartItems, setCartItems] = useState([])
    const [wishList, setWishList] = useState([])


    //fetching cartData from backend and set cartItems to users cart table
    useEffect(()=> {
        const fetchUserData = async () => {
            try {
                const response = await makeGetRequest('/user', getCookie("auth_token"))
                if(response.error){
                    console.log(response.error.message)
                }
                console.log(response)
                setCartItems(response.data?.data?.cart)
                setWishList(response.data?.data?.wishlist)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserData()
    },[])

    //add product to cart
    const addToCart = async (itemId) => {
        if(!token){
            return errorMsg("you must be logged in to do this")
        }
        try {
            const response = await makePostRequest('/add-to-cart', { id: itemId}, token)
            if(response.error){
                console.log(response.error.message)
            }
            setCartItems((prev) => ({
                ...prev,
                [itemId]: (prev[itemId.id] || 0) + 1
            }))
            console.log(response.data)
        } catch (error) {
            console.log(error)
            errorMsg("Failed to add product to cart")
        }
    }

    //add product to wishlist/favorite
    const addToWishlist = async (itemId) => {
        if(!token){
            return errorMsg("you must be logged in to do this")
        }
        try {
            const response = await makePostRequest('/add-to-wishlist', { id: itemId}, token)
            if(response.data.success === false){
                console.log(response.data.message)
            }
            
            setWishList((prev) => {
                if(!prev.includes(itemId)){
                    return [...prev, itemId]
                }
                errorMsg("item already exists")
                return prev
            })
            successMsg("Added to wishlist")
        } catch (error) {
            console.log(error)
            errorMsg("Failed to add product to wishlist")
        }
    }


    return (
        <ShopContext.Provider value={{allProducts, cartItems, wishList}}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider