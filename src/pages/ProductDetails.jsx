import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../data/api";
import {FiShoppingCart} from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadProduct() {
    const data = await getProducts();
    setProducts(data);
    const selected = data.find(
        item => item.id === Number(id)
    );

    setProduct(selected);
    setLoading(false);
}
    loadProduct();
  }, [id]);

  const recommendedProducts = products
    .filter(item =>
        item.category === product?.category &&
        item.id !== product?.id
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  if (loading) {
    return <Loader />;
  }
  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div>
      <Link className="back" to="/">← Back to Products</Link>
    <div className="details">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <button className="cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        <p>{product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
    </div>
    <h2 className="recommended-title">You may also like</h2>
    <div className="recommended-products">
      {recommendedProducts.map(item => (
        <div className="recommended-card" key={item.id}>
          <ProductCard
            product={item}
            addToCart={addToCart}
        />
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProductDetails;