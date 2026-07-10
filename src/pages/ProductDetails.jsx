import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    product => product.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div className="details">
      <img src={product.image} alt={product.title} />

      <div className="product-info">
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;