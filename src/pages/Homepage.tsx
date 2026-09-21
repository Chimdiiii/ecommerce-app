import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/api";
import Loader from "../components/Loader";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface HomepageProps {
    addToCart: (product: Product) => void;
}

function Homepage({ addToCart }: HomepageProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    if (loading) {
        return <Loader />;
    }

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* Search bar */}
            <div className="w-full flex justify-center mt-[25px] mb-[40px]">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    name="search bar"
                    className="w-[400px] max-w-[100%] px-[5px] py-[5px] border bg-white border-[#ccc] rounded-[5px] text-[18px] box-border focus:outline-none focus:border-[#B197E8]"
                />
            </div>

            {/* Products */}
            <div className="w-full my-[50px] pt-[20px] flex flex-wrap justify-center gap-[35px]">
                {filteredProducts.length === 0 ? (
                    <p className="w-full text-center">
                        No products found.
                    </p>
                ) : (
                    filteredProducts.map((product) => (
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