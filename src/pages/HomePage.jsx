import React from 'react';
import { useSelector } from 'react-redux';
import { ProductList } from "../cmps/ProductList.jsx";

export function HomePage() {
    const products = useSelector(storeState => storeState.productModule.products);

    return (
        <section>
            <h1>Home sweet Home</h1>
            <ProductList products={products} onRemoveProduct={() => {}} onUpdateProduct={() => {}} />
        </section>
    );
}