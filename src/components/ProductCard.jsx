import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
      <div className="card">
        <img src={product.image} alt={product.title}/>
        <h3>{product.title}</h3>
        <p>${product?.price || 0}</p>
        <div className="button-group">
          <Link to={`/product/${product.id}`}>
        <button className="card-button">View details</button>
        </Link>
        <button className="card-button" onClick={() => addToCart(product)}>🛒</button>
        </div>
      </div>
    
  );
}

export default ProductCard;