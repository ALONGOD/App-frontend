// AccessoriesProducts.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { ProductList } from '../cmps/ProductList.jsx';

export function AccessoriesProducts() {
    const products = useSelector(storeState => storeState.productModule.products);
    const accessoriesProducts = products.filter(product => product.category === 'accessories');

    return (
        <section>
            <h1>Accessories Products</h1>
            <ProductList products={accessoriesProducts} onRemoveProduct={() => {}} onUpdateProduct={() => {}} />
        </section>
    );
}