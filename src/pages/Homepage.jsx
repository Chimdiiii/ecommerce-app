import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/api";

function Homepage() {
   const [products, setProducts] = useState([]);

  useEffect(() => {

    async function loadProducts() {

      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();

  }, []);
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