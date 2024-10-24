import React from "react"
import { products } from "../data/products"
import { useCart } from "../cart/CartContext";

const Products = () => {

    const { dispatch } = useCart();

    const handleAddProductToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    return (
        <div className="container m-10">
            <h1 className="text-center">Products</h1>
            <br />
            <div className="row justify-content-between">
                <div className="ml-3">
                    <button type="button" className="btn btn-outline-secondary">
                        all
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Godzilla
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Ultraman
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Batman
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Wolverine
                    </button>
                </div>
                <div className="flex-grow-1 d-flex justify-content-lg-end">
                    <form className="form-inline my-2 my-lg-0 mr-3 mx-3">
                        <input
                            className="form-control mr-2"
                            type="text"
                            placeholder="Search our products!"
                            aria-label="Search"
                        />
                        {/* <button type="button" class="btn btn-outline-success my-2 my-sm-0">Search</button> */}
                    </form>
                </div>
            </div>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-6 col-lg-4 my-2 item ultraman" key={product.id}>

                        <div className="card h-100">
                            <img className="card-img-top" src={product.image} alt={product.id} />
                            <div className="card-body">
                                <p className="card-text">{product.name}</p>
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">{product.price}</h5>
                                    <button className="btn btn-primary add-to-cart" data-id="8" data-name={product.name}
                                        data-price={product.price} onClick={() => handleAddProductToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>)
}

export default Products