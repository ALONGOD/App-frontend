import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { addProductMsg } from '../store/actions/product.actions'

export function ProductDetails() {
    const { productId } = useParams()
    const product = useSelector(storeState => storeState.productModule.products.find(product => product._id === +productId))

    async function onAddProductMsg(productId) {
        try {
            await addProductMsg(productId, 'bla bla ' + parseInt(Math.random() * 10))
            showSuccessMsg(`Product msg added`)
        } catch (err) {
            showErrorMsg('Cannot add product msg')
        }
    }

    return (
        <section className="product-details">
            <Link to="/product">Back to list</Link>
            <h1>Product Details</h1>
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <h2>{product.category}</h2>
                    <img src={product.imgUrl} alt={product.name} />
                    <h4>{product.price} NIS</h4>
                    <p>{product.description}</p>
                </div>
            )}
            <button onClick={() => { onAddProductMsg(product._id) }}>Add product msg</button>
        </section>
    )
}