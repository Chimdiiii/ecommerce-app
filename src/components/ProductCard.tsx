import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product) => void;
}

function ProductCard({ product, addToCart }: ProductCardProps) {
    return (
        <div
            className="bg-white rounded-[18px] p-[25px] transition cursor-pointer shadow-[0_10px_25px_rgba(0,0,0,0.08)] w-[290px] h-[500px] flex flex-col text-center hover:-translate-y-[10px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
        >
            <div className="w-full h-[260px] flex justify-center items-center bg-white">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[260px] object-contain"
                />
            </div>

            <h3
                title={product.title}
                className="mb-[3px] text-[#222] font-medium min-h-[60px] overflow-hidden line-clamp-2"
            >
                {product.title}
            </h3>

            <p className="text-[#5B21B6] text-[20px] font-bold mb-5">
                ${product.price}
            </p>

            <div className="flex gap-[10px] flex-nowrap justify-center mt-auto">
                <Link
                    to={`/product/${product.id}`}
                    className="my-5 px-[19px] bg-black text-white rounded flex items-center justify-center whitespace-nowrap border hover:border-[#B197E8]  border-[#5B21B6] h-[45px] hover:bg-[#5B21B6] transition"
                    title="View details"
                >
                    View details
                </Link>

                <button
                    className="my-5 w-[45px] h-[45px] bg-white text-[#5B21B6] border border-black hover:border-[#5B21B6] rounded cursor-pointer flex items-center justify-center hover:bg-[#5B21B6] hover:text-white transition"
                    title="Add to cart"
                    onClick={() => addToCart(product)}
                >
                    <FiShoppingCart size={20} />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;