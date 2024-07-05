import { createContext, useState, useEffect } from "react";
import {all_products} from '../constants/products'
import { getCookie, makePostRequest, makeGetRequest, errorMsg, successMsg } from '../hooks'


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
                setCartItems(response.data?.data?.cart)
                setWishList(response.data?.data?.wishlist)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserData()
    },[])

    //add product to cart
    const addToCart = async (itemId, size, color) => {
        const token = getCookie('auth_token');
    
        if (!token) {
            return errorMsg('You must be logged in to do this');
        }
    
        try {
            const response = await makePostRequest('/add-to-cart', { productId: itemId, size, color }, token);
    
            if (response.error) {
                console.log(response.error.message);
                return errorMsg(response.error.message);
            }
    
            setCartItems((prev) => {
                const existingItemIndex = prev.findIndex(item => item.productId === itemId && item.size === size && item.color === color);
    
                if (existingItemIndex !== -1) {
                    // Update the quantity of the existing item
                    const updatedCart = [...prev];
                    updatedCart[existingItemIndex].quantity += 1;
                    return updatedCart;
                } else {
                    // Add the new item to the cart
                    return [...prev, { productId: itemId, size, color, quantity: 1 }];
                }
            });
    
            console.log(response.data);
            successMsg('Product added to cart');
        } catch (error) {
            console.log(error);
            errorMsg('Failed to add product to cart');
        }
    };
    

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
    const removeFromCart = async (itemId, size, color) => {
        const token = getCookie('auth_token');
    
        if (!token) {
            return errorMsg('You must be logged in');
        }
    
        try {
            const res = await makePostRequest('/remove-from-cart', { productId: itemId, size, color }, token);
    
            if (!res.data.success) {
                console.log(res.data.message);
                return errorMsg(res.data.message);
            }
    
            // Update the cart state
            setCartItems((prev) => {
                const updatedCart = prev.filter(item => !(item.productId === itemId && item.size === size && item.color === color));
                return updatedCart;
            });
    
            successMsg(res.data.message);
        } catch (error) {
            console.error('Error removing item from cart:', error);
            errorMsg('There was an error removing the item from the cart');
        }
    };
    

    //remove product from wishlist
    const removeFromWishlist = async (itemId) => {
        if(!token) {
            return errorMsg("you must be logged in")
        }
        try {
            const res = await makePostRequest('/remove-from-wishlist', {id: itemId}, token)
            if(res.data.success === false){
                console.log(res.data.message)
                return errorMsg(res.data.message)
            }
            setWishList((prev) => prev.filter((item) => item!== itemId))
            successMsg(res.data.message)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ShopContext.Provider value={{allProducts, cartItems, wishList, addToCart, addToWishlist, removeFromCart, removeFromWishlist}}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider