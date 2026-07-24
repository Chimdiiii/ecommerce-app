import { Link } from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";

function ProductCard({ product, addToCart }) {
  return (
      <div className="card">
        <div className="card-container">
          <img src={product.image} alt={product.title}/>
        </div>
        <h3 title={product.title}>{product.title}</h3>
        <p>${product?.price || 0}</p>
        <div className="button-group">
          <Link to={`/product/${product.id}`}>
        <button className="secondary-button" title="View details">View details</button>
        </Link>
        <button className="primary-button" title="Add to cart" onClick={() => addToCart(product)}><FiShoppingCart/></button>
        </div>
      </div>
    
  );
}

export default ProductCard;