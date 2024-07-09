import { createContext, useState, useEffect, useCallback } from "react";
import { all_products } from '../constants/products';
import { 
    getCookie, 
    makePostRequest,
    makeGetRequest,
    errorMsg, 
    successMsg,
    makeDeleteRequest,
    removeCookie 
} from '../hooks';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState(all_products);
    const [cartItems, setCartItems] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [user, setUser] = useState(null);
    const token = getCookie("auth_token");

    // fetching cartData from backend and set cartItems to users cart table
    const fetchUserData = useCallback(async () => {
        if (!token) return; // Ensure the token is available before making the request

        try {
            const response = await makeGetRequest('/user', token);
            if (response.error) {
                console.log(response.error.message);
            } else {
                setUser(response?.data?.data);
                setCartItems(response?.data?.data?.cart);
                setWishList(response?.data?.data?.wishlist);
            }
        } catch (error) {
            console.log(error);
        }
    }, [token]); // Add token as dependency to avoid infinite loop

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    // add product to cart
    const addToCart = async (itemId, size, color, quantity) => {
        if (!token) {
            return errorMsg('You must be logged in to do this');
        }
    
        try {
            const response = await makePostRequest('/add-to-cart', { itemId, size, color, quantity }, token);
    
            if (response.data.success === false) {
                return errorMsg(response.data.message);
            }
            await fetchUserData();
            successMsg(response.data.message);
        } catch (error) {
            console.log(error);
            errorMsg('Failed to add product to cart');
        }
    };
    
    // add product to wishlist/favorite
    const addToWishlist = async (itemId) => {
        if (!token) {
            return errorMsg("You must be logged in to do this");
        }
        try {
            const response = await makePostRequest('/add-to-wishlist', { id: itemId }, token);
            if (response.data.success === false) {
                console.log(response.data.message);
                errorMsg(response.data.message);
            }
            
            await fetchUserData();
            successMsg(response.data.message);
        } catch (error) {
            console.log(error);
            errorMsg("Failed to add product to wishlist");
        }
    };

    // remove product from cart
    const removeFromCart = async (itemId, size, color) => {
        if (!token) {
            return errorMsg('You must be logged in');
        }
    
        try {
            const res = await makeDeleteRequest('/remove-from-cart', { itemId, size, color }, token);
    
            if (!res.data.success) {
                console.log(res.data.message);
                return errorMsg(res.data.message);
            }
            await fetchUserData();
            successMsg(res.data.message);
        } catch (error) {
            console.error(error);
            errorMsg('There was an error removing the item from the cart');
        }
    };

    // remove product from wishlist
    const removeFromWishlist = async (itemId) => {
        if (!token) {
            return errorMsg("You must be logged in");
        }
        try {
            const res = await makeDeleteRequest('/remove-from-wishlist', { itemId }, token);
            if (!res.data.success) {
                console.log(res.data.message);
                return errorMsg(res.data.message);
            }
            await fetchUserData();
            successMsg(res.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    // get sub total of cart items
    const subtotal = cartItems?.reduce((acc, item) => {
        const product = allProducts?.find(product => product.id.toString() === item.itemId);
        if (product) {
            const totalCost = parseFloat(product.new_price) * item.quantity;
            return acc + totalCost;
        }
        return acc;
    }, 0).toFixed(2);

    // get total number of items in the cart
    const totalItems = cartItems?.reduce((acc, item) => acc + item.quantity, 0);

    // get total number of items in the wishlist
    const totalWishlistItems = wishList?.length;

    const handleLogOut = () => {
        removeCookie("auth_token"),
        setUser(null);
        fetchUserData();
        navigate('/'); // Redirect to login after logout
    }

    return (
        <ShopContext.Provider value={{
            allProducts,
            cartItems,
            wishList,
            addToCart,
            addToWishlist,
            removeFromCart,
            removeFromWishlist,
            user,
            setUser,
            subtotal,
            totalItems,
            totalWishlistItems,
            fetchUserData,
            handleLogOut
        }}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
