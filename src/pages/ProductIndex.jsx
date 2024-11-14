import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadProducts, addProduct, updateProduct, removeProduct, addProductMsg } from '../store/actions/product.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { productService } from '../services/product'
import { userService } from '../services/user'

import { ProductList } from '../cmps/ProductList'
import { ProductFilter } from '../cmps/ProductFilter'

export function ProductIndex() {

    const [ filterBy, setFilterBy ] = useState(productService.getDefaultFilter())
    const products = useSelector(storeState => storeState.productModule.products)

    useEffect(() => {
        loadProducts(filterBy)
    }, [filterBy])

    async function onRemoveProduct(productId) {
        try {
            await removeProduct(productId)
            showSuccessMsg('Product removed')            
        } catch (err) {
            showErrorMsg('Cannot remove product')
        }
    }

    async function onAddProduct() {
        const product = productService.getEmptyProduct()
        product.vendor = prompt('Vendor?')
        try {
            const savedProduct = await addProduct(product)
            showSuccessMsg(`Product added (id: ${savedProduct._id})`)
        } catch (err) {
            showErrorMsg('Cannot add product')
        }        
    }

    async function onUpdateProduct(product) {
        const speed = +prompt('New speed?', product.speed)
        if(speed === 0 || speed === product.speed) return

        const productToSave = { ...product, speed }
        try {
            const savedProduct = await updateProduct(productToSave)
            showSuccessMsg(`Product updated, new speed: ${savedProduct.speed}`)
        } catch (err) {
            showErrorMsg('Cannot update product')
        }        
    }

    return (
        <main className="product-index">
            <header>
                <h2>Products</h2>
                {userService.getLoggedinUser() && <button onClick={onAddProduct}>Add a Product</button>}
            </header>
            <ProductFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            <ProductList 
                products={products}
                onRemoveProduct={onRemoveProduct} 
                onUpdateProduct={onUpdateProduct}/>
        </main>
    )
}