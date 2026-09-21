import { Link } from "react-router-dom";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartProps {
    cart: CartItem[];
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeFromCart: (productId: number) => void;
}

function Cart({
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
}: CartProps) {

    if (cart.length === 0) {
        return (
            <div className="text-center py-20 font-[Times_New_Roman]">
                <h1 className="text-3xl font-bold mb-4">
                    Shopping Cart
                </h1>

                <p className="mb-6">
                    Your cart is empty.
                </p>

                <Link to="/" className="inline-block px-5 py-3 bg-black text-white rounded-lg hover:bg-[#333] transition">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="w-[90%] max-w-[900px] mx-auto my-[50px] font-[Times_New_Roman]">

            <h1 className="text-3xl font-bold mb-8">
                Shopping Cart
            </h1>

            {cart.map((item) => (
                <div
                    className="flex gap-[30px] items-center bg-white mb-5 p-5 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition"
                    key={item.id}
                >
                    <img src={item.image} alt={item.title} className="w-[120px] h-[120px] object-contain shrink-0"/>

                    <div>
                        <h3 className="text-xl font-medium mb-2">
                            {item.title}
                        </h3>

                        <p className="mb-2">
                            Price: ${item.price}
                        </p>

                        <div className="flex items-center gap-[10px] mt-[15px]">

                            <button
                                onClick={() => decreaseQuantity(item.id)}
                                className=" w-[35px] h-[35px] border-none bg-[#2563EB] text-white cursor-pointer rounded-md text-lg"
                            >
                                −
                            </button>

                            <span className="text-lg font-bold min-w-[25px] text-center">
                                {item.quantity}
                            </span>

                            <button
                                onClick={() => increaseQuantity(item.id)}
                                className="w-[35px] h-[35px] border-none bg-[#2563EB] text-white cursor-pointer rounded-md text-lg"
                            >
                                +
                            </button>

                            <button
                                className="px-[15px]h-[35px] bg-[#dc2626] text-white border-none rounded-md cursor-pointer"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>

                        </div>

                        <p className="mt-4 mb-4">
                            Subtotal: $
                            {(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>
            ))}

            <h2 className="text-2xl font-bold mb-6">
                Total: ${total.toFixed(2)}
            </h2>

            <Link to="/"
                className="inline-block px-5 py-3 bg-black text-white rounded-lg hover:bg-[#333] transition"
            >
                Continue Shopping
            </Link>

        </div>
    );
}

export default Cart;