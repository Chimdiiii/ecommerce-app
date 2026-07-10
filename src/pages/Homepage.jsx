import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Homepage() {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Homepage;