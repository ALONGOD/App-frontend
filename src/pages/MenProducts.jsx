// MenProducts.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { ProductList } from '../cmps/ProductList.jsx';

export function MenProducts() {
    const products = useSelector(storeState => storeState.productModule.products);
    const menProducts = products.filter(product => product.category === 'men');

    return (
        <section>
            <h1>Men Products</h1>
            <ProductList products={menProducts} onRemoveProduct={() => {}} onUpdateProduct={() => {}} />
        </section>
    );
}