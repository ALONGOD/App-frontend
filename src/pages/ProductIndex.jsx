import { useState } from 'react'
import { useSelector } from 'react-redux'

import { addProduct, updateProduct, removeProduct, addProductMsg } from '../store/actions/product.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { productService } from '../services/product'
import { userService } from '../services/user'

import { ProductList } from '../cmps/ProductList'
import { ProductFilter } from '../cmps/ProductFilter'

export function ProductIndex() {
    const [filterBy, setFilterBy] = useState(productService.getDefaultFilter())
    const products = useSelector(storeState => storeState.productModule.products)

    // useEffect(() => {
    //     loadProducts(filterBy)
    // }, [filterBy])

    const filteredProducts = products.filter(product => {
        const productPrice = parseInt(product.price, 10)
        return (
            product.name.toLowerCase().includes(filterBy.txt.toLowerCase()) &&
            (filterBy.maxPrice === '' || productPrice <= filterBy.maxPrice) &&
            (filterBy.category === '' || product.category === filterBy.category)
        )
    })

    async function onRemoveProduct(productId) {
        try {
            await removeProduct(productId)
            showSuccessMsg('Product removed')
        } catch (err) {
            showErrorMsg('Cannot remove product')
        }
    }

    return (
        <section className='product-index'>
            <ProductFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            <ProductList products={filteredProducts} onRemoveProduct={onRemoveProduct} onUpdateProduct={updateProduct} />
        </section>
    )
}