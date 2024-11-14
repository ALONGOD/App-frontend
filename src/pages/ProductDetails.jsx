import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadProduct, addProductMsg } from '../store/actions/product.actions'


export function ProductDetails() {

  const {productId} = useParams()
  const product = useSelector(storeState => storeState.productModule.product)

  useEffect(() => {
    loadProduct(productId)
  }, [productId])

  async function onAddProductMsg(productId) {
    try {
        await addProductMsg(productId, 'bla bla ' + parseInt(Math.random()*10))
        showSuccessMsg(`Product msg added`)
    } catch (err) {
        showErrorMsg('Cannot add product msg')
    }        

}

  return (
    <section className="product-details">
      <Link to="/product">Back to list</Link>
      <h1>Product Details</h1>
      {product && <div>
        <h3>{product.vendor}</h3>
        <h4>${product.price}</h4>
        <pre> {JSON.stringify(product, null, 2)} </pre>
      </div>
      }
      <button onClick={() => { onAddProductMsg(product._id) }}>Add product msg</button>

    </section>
  )
}