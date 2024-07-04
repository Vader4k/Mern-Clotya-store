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
                errorMsg(response.data.message)
            }
            
            setWishList((prev) => {
                if(!prev.includes(itemId)){
                    return [...prev, itemId]
                }
                errorMsg(response.data.message)
                return prev
            })
            successMsg(response.data.message)
        } catch (error) {
            console.log(error)
            errorMsg("Failed to add product to wishlist")
        }
    }

    //remove product from cart
    const removeFromCart = async (itemId) => {
        if(!token) {
            return errorMsg("you must be logged in")
        }
        try {
            const res = await makePostRequest('/remove-from-cart', {id: itemId}, token)
            if(res.data.success === false){
                console.log(res.data.message)
                return errorMsg(res.data.message)
            }
            setCartItems((prev) => {
                const updatedCart = {...prev}
                delete updatedCart[itemId]
                return updatedCart
            })
            successMsg(res.data.message)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ShopContext.Provider value={{allProducts, cartItems, wishList, addToCart, addToWishlist}}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider