import React, { useContext, useState } from 'react';
import { useCart } from './CartContext';

const CartSystem = () => {
    const [totalPrice, setTotalPrice] = useState(0); //initial price is 0

    const { cart, dispatch } = useCart();

    const removeFromCart = (product) => { dispatch({ type: 'REMOVE_FROM_CART', payload: product }) }

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty...</p>
            ) : (
                <ul>
                    {cart.map((item) => {

                        return (
                            <li key={item.id}>
                                {item.name} - RM {item.price}{' '}
                                <button onClick={() => removeFromCart(item)}>Delete Item</button>
                            </li>
                        )
                    })}

                    <div>
                        <p>Total price: </p>
                        <p></p>
                    </div>
                </ul>
            )}
        </div>
    );
};

export default CartSystem;

