import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="container">
            <h1>Your Cart</h1>
            <ul className="list-group">
                {cartItems.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between">
                        <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                        <span>{item.name}</span>
                        <span>RM {item.price}</span>
                        <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
