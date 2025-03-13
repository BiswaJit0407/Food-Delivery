/*

import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";
export const StoreContext = createContext(null);

//It is simply a function
const StoreContextProvider = (props) => {

    //It is a object if you pass any value in this object then we can access in any function using context properties.
    const[cartItems,setCartItems] = useState({})
    const addToCart = (itemId) => {
        // setCartItems({...cartItems, [itemId]: (cartItems[itemId] || 0) + 1 });
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1})) //if the user add first time to cart this will be executed
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1})) //if the user add more than one time to cart this will be executed
        }
    }

    const removeFromCart = (itemId) => {
        // setCartItems((prev)=>({...prev, [itemId]: (prev[itemId] || 0) - 1}));
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))   //if the user remove item
    }

useEffect(() => {
 
    console.log(cartItems)
},[cartItems])


    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }


////ContextValue is variable
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

*/

import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";


export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId] > 1) {
                newCartItems[itemId] -= 1;
            } else {
                delete newCartItems[itemId]; // Remove item if quantity is 0 or less
            }
            return newCartItems;
        });
    };

    useEffect(() => {
        console.log(cartItems); // Consider removing or adjusting this in production
    }, [cartItems]);

    const ContextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
