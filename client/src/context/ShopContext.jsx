import { createContext, useState, useEffect } from "react";
import {all_products} from '../constants/products'
import { 
    getCookie, 
    makePostRequest,
    makeGetRequest,
    errorMsg, 
    successMsg,
    makeDeleteRequest 
} from '../hooks'

export const ShopContext = createContext(null)

const token = getCookie("auth_token")

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState(all_products)
    const [cartItems, setCartItems] = useState([])
    const [wishList, setWishList] = useState([])
    const [user, setUser] = useState(null)


    //fetching cartData from backend and set cartItems to users cart table
    useEffect(()=> {
        const fetchUserData = async () => {
            try {
                const response = await makeGetRequest('/user', getCookie("auth_token"))
                if(response.error){
                    console.log(response.error.message)
                }
                setUser(response?.data?.data)
                setCartItems(response.data?.data?.cart)
                setWishList(response.data?.data?.wishlist)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUserData()
    },[])

    //add product to cart
    const addToCart = async (itemId, size, color, quantity) => {
        const token = getCookie('auth_token');
    
        if (!token) {
            return errorMsg('You must be logged in to do this');
        }
    
        try {
            const response = await makePostRequest('/add-to-cart', { itemId, size, color, quantity }, token);
    
            if (response.data.success === false) {
                console.log(response.data.message);
                return errorMsg(response.data.message);
            }
    
            setCartItems((prev) => {
                const existingItemIndex = prev.findIndex(item => item.productId === itemId && item.size === size && item.color === color);
    
                if (existingItemIndex !== -1) {
                    // Update the quantity of the existing item
                    const updatedCart = [...prev];
                    updatedCart[existingItemIndex].quantity += quantity;
                    return updatedCart;
                } else {
                    // Add the new item to the cart
                    return [...prev, { productId: itemId, size, color, quantity}];
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
        if (!token) {
            return errorMsg('You must be logged in');
        }
    
        try {
            const res = await makeDeleteRequest('/remove-from-cart', { itemId, size, color }, token);
    
            if (!res.data.success === true) {
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
            console.error(error);
            errorMsg('There was an error removing the item from the cart');
        }
    };
    

    //remove product from wishlist
    const removeFromWishlist = async (itemId) => {
        if(!token) {
            return errorMsg("you must be logged in")
        }
        try {
            const res = await makeDeleteRequest('/remove-from-wishlist', {id: itemId}, token)
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

    //get sub total of cart item
    const subtotal = cartItems.reduce((acc, item) => {
        const product = allProducts.find(product => product.id.toString() === item.itemId);
        if (product) {
          const totalCost = parseFloat(product.new_price) * item.quantity;
          return acc + totalCost;
        }
        return acc;
      }, 0);

    //GETTING the total amount of items in the cart
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    //Getting total amount of items in the wishlist
    const totalWishlistItems = wishList.length

    return (
        <ShopContext.Provider value={{allProducts, cartItems, wishList, addToCart, addToWishlist, removeFromCart, removeFromWishlist, user, setUser, subtotal, totalItems, totalWishlistItems}}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider