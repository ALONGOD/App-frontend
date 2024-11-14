import { Link } from 'react-router-dom';

export function ProductPreview({ product }) {
    return (
        <article className="product-preview">
            <header>
                <Link to={`/product/${product._id}`}>{product.name}</Link>
            </header>
            {/* <img src={product.imgUrl} alt={product.name} /> */}
            <p>Price: <span>{product.price} NIS</span></p>
        </article>
    );
}