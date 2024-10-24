import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            console.log(state);
            //array.some searches an element in the array, if it's found-- it will return true

            console.log(state)

            const originalPrice = state.totalPrice
            const newTotalPrice = originalPrice + action.payload.price

            const updatedProducts = [...state.products, action.payload];



            return {
                products: updatedProducts,
                totalPrice: newTotalPrice,
            }

        }


        case 'REMOVE_FROM_CART': {
            const originalPrice = state.totalPrice
            const productToRemove = state.products[action.payload];
            const newTotalPrice = originalPrice - productToRemove.price


            let existingProducts = [...state.products];
            existingProducts.splice(action.payload, 1)


            console.log(existingProducts)


            return {
                totalPrice: newTotalPrice,
                products: existingProducts,
            }
        }

        default: {
            return state.products;
        }
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, {
        totalPrice: 0,
        products: [],
    });

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
