import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../data/api";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    async function loadProduct() {
      const data = await getProducts();

      const selected = data.find(
        item => item.id === Number(id)
      );
      setProduct(selected);
    }
    loadProduct();
  }, [id]);

  if (!product) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div>
      <Link className="back" to="/">← Back to Products</Link>
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
    </div>
  );
}

export default ProductDetails;