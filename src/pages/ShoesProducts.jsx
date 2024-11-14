// ShoesProducts.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { ProductList } from '../cmps/ProductList.jsx';

export function ShoesProducts() {
    const products = useSelector(storeState => storeState.productModule.products);
    const shoesProducts = products.filter(product => product.category === 'shoes');

    return (
        <section>
            <h1>Shoes Products</h1>
            <ProductList products={shoesProducts} onRemoveProduct={() => {}} onUpdateProduct={() => {}} />
        </section>
    );
}