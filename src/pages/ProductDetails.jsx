import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service';
import { addProductMsg } from '../store/actions/product.actions';
import { addToCart, removeFromCart } from '../store/actions/cart.actions';

export function ProductDetails() {
    const { productId } = useParams();
    const product = useSelector(storeState => storeState.productModule.products.find(product => product._id === +productId));
    const cart = useSelector(storeState => storeState.cartModule.cart);
    const dispatch = useDispatch();
    const isInCart = cart.some(item => item._id === product._id);

    async function onAddProductMsg(productId) {
        try {
            await addProductMsg(productId, 'bla bla ' + parseInt(Math.random() * 10));
            showSuccessMsg(`Product msg added`);
        } catch (err) {
            showErrorMsg('Cannot add product msg');
        }
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product._id));
    };

    return (
        <section className="product-details">
            <Link to="/product">Back to list</Link>
            <h1>{product.name}</h1>
            {product && (
                <div>
                    <h2>{product.category}</h2>
                    <img src={product.imgUrl} alt={product.name} />
                    <h4>{product.price}₪</h4>
                    <p>{product.description}</p>
                    {isInCart ? (
                        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
                    ) : (
                        <button onClick={handleAddToCart}>Add to Cart</button>
                    )}
                </div>
            )}
        </section>
    );
}