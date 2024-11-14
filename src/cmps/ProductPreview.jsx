import { Link } from 'react-router-dom'

export function ProductPreview({ product }) {
    return <article className="preview">
        <header>
            <Link to={`/product/${product._id}`}>{product.vendor}</Link>
        </header>

        <p>Speed: <span>{product.speed.toLocaleString()} Km/h</span></p>
        {product.owner && <p>Owner: <span>{product.owner.fullname}</span></p>}
        
    </article>
}