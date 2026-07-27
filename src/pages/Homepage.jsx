import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/api";
import Loader from "../components/Loader";

function Homepage({addToCart}) {
   const [products, setProducts] = useState([]);
   const [search, setSearch] = useState("");
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {

    try{
      const data = await getProducts();
      setProducts(data);
    }
    catch(error){
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  }
    loadProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }
    const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
        <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-bar" name="search bar"/>
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