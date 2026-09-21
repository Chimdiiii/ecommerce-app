import { useEffect, useState } from "react";
import { getProducts } from "../data/api";
import ProductCard from "../components/ProductCard";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface CategoriesProps {
    addToCart: (product: Product) => void;
}

function Categories({ addToCart }: CategoriesProps) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts();
            setProducts(data);
        }

        loadProducts();
    }, []);

    const groupedProducts = products.reduce(
        (groups: Record<string, Product[]>, product) => {
            if (!groups[product.category]) {
                groups[product.category] = [];
            }

            groups[product.category].push(product);
            return groups;
        },
        {}
    );

    return (
        <div className="w-full">
            {Object.entries(groupedProducts).map(
                ([category, items]) => (
                    <div key={category}>

                        {/* Category heading */}
                        <h2 className="mt-[50px] mb-[25px] text-[28px] border-l-[5px] border-[#2563EB] pl-[15px] capitalize">
                            {category}
                        </h2>

                        {/* Products */}
                        <div className="w-full my-[50px] grid grid-cols-[repeat(auto-fill,290px)] gap-[35px] justify-center">
                            {items.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    addToCart={addToCart}
                                />
                            ))}
                        </div>

                    </div>
                )
            )}

        </div>
    );
}

export default Categories;