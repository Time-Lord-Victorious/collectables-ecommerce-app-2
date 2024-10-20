import { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        };
        addToCart(cartItem);
    };

    return (
        <div className="card h-100">
            <img className="card-img-top" src={product.image} alt={product.name} />
            <div className="card-body">
                <p className="card-text">{product.name}</p>
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">RM {product.price}</h5>
                    <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
