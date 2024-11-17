import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cart.actions';

export function Cart() {
    const cart = useSelector(storeState => storeState.cartModule.cart);
    const dispatch = useDispatch();

    const total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <section className="cart">
            <h1>Shopping Cart</h1>
            <ul>
                {cart.map(item => (
                    <li key={item._id}>
                        <p>{item.name}</p>
                        <p>{item.price} NIS</p>
                        <button onClick={() => handleRemoveFromCart(item._id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Total: {total} NIS</h2>
            <button>Checkout</button>
        </section>
    );
}