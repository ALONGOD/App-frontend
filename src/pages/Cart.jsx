import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cart.actions';
import PayPalButton from './PayPalButton';
import { ProductList } from '../cmps/ProductList';

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
            {cart.length === 0 ? (
                <p>Your Cart Is Empty</p>
            ) : (
                <>
                    <ProductList 
                        products={cart} 
                        onRemoveProduct={handleRemoveFromCart} 
                        onUpdateProduct={() => {}} 
                    />
                    <h2>Total: {total} NIS</h2>
                    {total > 0 && <PayPalButton total={total} />}
                </>
            )}
        </section>
    );
}