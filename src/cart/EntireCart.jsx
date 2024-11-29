import React, { useContext } from 'react';
import { useCart } from './CartContext';

// Navbar code starts
import Navbar from "../components/navbar";

// Navbar code ends
const BASE_URL = "https://81cbb5a9-d419-4981-a914-31087e169667-00-2c59gjl1023od.pike.replit.dev/"

const CartSystem = () => {


    const { cart, dispatch } = useCart();

    const removeFromCart = (indexToRemove) => { dispatch({ type: 'REMOVE_FROM_CART', payload: indexToRemove }) }

    console.log(cart)

    return (
        <div>
            <Navbar />
            <br></br>
            <h2>Your Cart</h2>
            <br />
            {cart.products.length === 0 ? (
                <p>Your cart is empty bro 💀💀💀...</p>
            ) : (
                <ul>
                    {cart.products.map((item, index) => {

                        return (
                            <li key={item.id}>
                                {item.name} - RM {item.price}{' '}
                                <button onClick={() => removeFromCart(index)}>Delete Item</button>
                            </li>
                        )
                    })}
                    <br />
                    <div>
                        <p>Total price (RM): </p>
                        <p>{cart.totalPrice}</p>
                    </div>
                </ul>
            )}
        </div>
    );
};
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
export default CartSystem;

