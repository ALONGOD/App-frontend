import { userService } from '../services/user'
import { ProductPreview } from './ProductPreview'

export function ProductList({ products, onRemoveProduct, onUpdateProduct }) {
    
    function shouldShowActionBtns(product) {
        const user = userService.getLoggedinUser()
        
        if (!user) return false
        if (user.isAdmin) return true
        return product.owner?._id === user._id
    }

    return <section>
        <ul className="list">
            {products.map(product =>
                <li key={product._id}>
                    <ProductPreview product={product}/>
                    {shouldShowActionBtns(product) && <div className="actions">
                        <button onClick={() => onUpdateProduct(product)}>Edit</button>
                        <button onClick={() => onRemoveProduct(product._id)}>x</button>
                    </div>}
                </li>)
            }
        </ul>
    </section>
}