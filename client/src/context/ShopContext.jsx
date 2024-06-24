import { createContext, useState } from "react";
import {all_products} from '../constants/products'

export const ShopContext = createContext(null)

const shopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState(all_products)

    return (
        <ShopContext.Provider value={{allProducts}}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default shopContextProvider