import React, { useContext } from 'react';
import { useCart } from './CartContext';

// Navbar code starts
import Navbar from "../components/navbar";

// Navbar code ends

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

export default CartSystem;

