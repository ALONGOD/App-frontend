import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/actions/cart.actions';

export function ProductPreview({ product }) {
    const dispatch = useDispatch();
    const cart = useSelector(storeState => storeState.cartModule.cart);
    const isInCart = cart.some(item => item._id === product._id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product._id));
    };

    return (
        <article className="product-preview">
            <header>
                <Link to={`/product/${product._id}`}>{product.name}</Link>
            </header>
            <img src={product.imgUrl} alt={product.name} />
            <p>Price: <span>{product.price} NIS</span></p>
            {isInCart ? (
                <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            ) : (
                <button onClick={handleAddToCart}>Add to Cart</button>
            )}
        </article>
    );
}