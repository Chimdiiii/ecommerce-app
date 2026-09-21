import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../data/api";
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface ProductDetailsProps {
    addToCart: (product: Product) => void;
}

function ProductDetails({ addToCart }: ProductDetailsProps) {
    const { id } = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product | undefined>(undefined);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProduct() {
            try {
                const data = await getProducts();

                setProducts(data);

                const selected = data.find(
                    (item: Product) => item.id === Number(id)
                );

                setProduct(selected);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [id]);

    const recommendedProducts = products
        .filter(
            (item) =>
                item.category === product?.category &&
                item.id !== product?.id
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    if (loading) {
        return <Loader />;
    }

    if (!product) {
        return (
            <h2 className="text-center text-2xl font-bold py-20">
                Product not found.
            </h2>
        );
    }

    return (
        <div className="w-full">
            <Link to="/" className="block text-center py-5 text-black font-medium hover:text-[#5B21B6] transition">
                ← Back to Products
            </Link>

            <div
                className="w-[90%] max-w-[1000px] mx-auto my-[60px] flex gap-[60px] items-center bg-white rounded-[20px] p-[40px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] max-[768px]:flex-col max-[768px]:text-center"
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-[350px] h-[350px] object-contain max-[768px]:w-[280px] max-[768px]:h-[280px]"
                />

                <div>
                    <h1 className="text-3xl font-bold mb-5">
                        {product.title}
                    </h1>

                    <h2 className="text-2xl font-bold text-[#5B21B6] mb-5">
                        ${product.price}
                    </h2>

                    <button
                        className="px-[25px] py-3 bg-black text-white border-none rounded-lg cursor-point hover:bg-[#5B21B6] transition flex items-center justify-center gap-2 max-[768px]:mx-auto"
                        onClick={() => addToCart(product)}
                    >
                      <FiShoppingCart />
                        Add to Cart
                    </button>

                    <p className="mt-5 mb-[15px] leading-[1.6]">
                        {product.description}
                    </p>

                    <p className="mb-[15px]">
                        <strong>Category:</strong> {product.category}
                    </p>
                </div>
            </div>

            <h2 className="mt-[70px] mb-[30px] text-[30px] text-center font-bold">
                You may also like
            </h2>

            <div className="flex gap-5 justify-center overflow-x-auto overflow-y-hidden px-[5px] pt-[10px] pb-5 scroll-smooth">
               {recommendedProducts.map((item) => (
                <div
                   key={item.id}
                   className="w-[218px] shrink-0"
                >
            <div className="scale-[0.75] origin-top-left">
                <ProductCard
                    product={item}
                    addToCart={addToCart}
                />
            </div>
        </div>
    ))}
</div>
        </div>
    );
}

export default ProductDetails;