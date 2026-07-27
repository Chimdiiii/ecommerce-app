import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/api";

function Homepage({addToCart}) {
   const [products, setProducts] = useState([]);
   const [search, setSearch] = useState("");

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

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
        <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-bar"/>
        <div className="products">
            {filteredProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))
            )}
        </div>
    </>
);
}

export default Homepage;