import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                const updatedCart = [...state];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        }

        case 'REMOVE_FROM_CART': {
            return state.filter(item => item.id !== action.payload.id);
        }

        default: {
            return state;
        }
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
