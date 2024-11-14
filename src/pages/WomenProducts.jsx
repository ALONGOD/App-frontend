// WomenProducts.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { ProductList } from '../cmps/ProductList.jsx';

export function WomenProducts() {
    const products = useSelector(storeState => storeState.productModule.products);
    const womenProducts = products.filter(product => product.category === 'women');

    return (
        <section>
            <h1>Women Products</h1>
            <ProductList products={womenProducts} onRemoveProduct={() => {}} onUpdateProduct={() => {}} />
        </section>
    );
}