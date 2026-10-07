import { useState } from "react";
import { Link } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";

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
    const [email, setEmail] = useState("");
    if (cart.length === 0) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-[#eef0f3]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        Shopping Cart
                    </h1>
                    <p className="mb-6 text-gray-500">
                        Your cart is empty.
                    </p>

                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-black text-white hover:bg-[#333] transition"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );
    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = 5;
    const total = subtotal + shipping;
    const paystack = new PaystackPop();

    const handleCheckout = () => { 
        if (!email) {
        alert("Please enter your email address.");
        return;
        }  
        paystack.newTransaction({
        key: (import.meta as ImportMeta & { env: { VITE_PAYSTACK_PUBLIC_KEY: string } }).env.VITE_PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: Math.round(total * 100),

        onSuccess: (transaction) => {
            console.log("Payment successful:", transaction);

            alert("Payment successful!");
        },

        onCancel: () => {
            alert("Payment cancelled.");
        },
       });
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-[#eef0f3] flex items-center justify-center px-5 py-12">
            <div className="w-full max-w-[1500px] bg-white flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                {/* LEFT SIDE CART */}
                <div className="flex-1 px-8 py-10 md:px-12">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-5 border-b border-[#e5e5e5]">
                        <h1 className="text-2xl font-bold">
                            Shopping Cart
                        </h1>
                        <span className="text-lg font-bold">
                            {totalItems} Items
                        </span>
                    </div>

                    {/* Column headings */}
                    <div className="grid grid-cols-[1fr_100px_70px] gap-4 mt-5 pb-3 text-[10px] uppercase text-gray-400">
                        <span>
                            Product Details
                        </span>

                        <span className="text-center">
                            Quantity
                        </span>

                        <span className="text-right">
                            Price
                        </span>
                    </div>

                    {/* Cart items */}
                    <div>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-[1fr_100px_70px] gap-4 items-center py-4"
                            >
                                {/* Product */}
                                <div className="flex items-center gap-4 min-w-0">

                                    <div className="w-[55px] h-[55px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-sm font-medium truncate">
                                            {item.title}
                                        </h3>
                                        <p className="text-[11px] text-[#f27676] mt-1">
                                            Fashion
                                        </p>

                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="text-[10px] text-gray-400 mt-2 hover:text-red-500 transition"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div className="flex items-center justify-center gap-2">

                                    <button
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                        className="text-gray-700 text-sm hover:text-[#5B21B6]"
                                    >
                                        −
                                    </button>

                                    <span className="w-[25px] h-[25px] border border-[#ddd] flex items-center justify-center text-xs">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                        className="text-gray-700 text-sm hover:text-[#5B21B6]"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Price */}
                                <div className="text-right text-xs font-medium">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>

                            </div>
                        ))}
                    </div>


                    {/* Continue shopping */}
                    <div className="mt-8">
                        <Link
                            to="/"
                            className="text-xs text-[#5B21B6] font-medium hover:underline"
                        >
                            ← &nbsp; Continue Shopping
                        </Link>
                    </div>
                </div>


                {/*ORDER SUMMARY */}
                <div className="w-full md:w-[300px] bg-[#f8f8f8] px-8 py-10">
                    <h2 className="text-xl font-bold pb-5 border-b border-[#dedede]">
                        Order Summary
                    </h2>

                    {/* Items */}
                    <div className="flex justify-between mt-5 text-xs font-bold">

                        <span>
                            ITEMS {totalItems}
                        </span>

                        <span>
                            ${subtotal.toFixed(2)}
                        </span>

                    </div>

                    {/* Shipping */}
                    <div className="mt-7">

                        <p className="text-[10px] uppercase font-bold mb-3">
                            Shipping
                        </p>

                        <select
                            className="w-full h-[38px] px-3 bg-white border-none text-[11px] text-gray-500 outline-none"
                            defaultValue="standard"
                        >
                            <option value="standard">
                                Standard Delivery - $5.00
                            </option>
                        </select>

                    </div>


                    {/* Promo code */}
                    <div className="mt-7">
                        <p className="text-[10px] uppercase font-bold mb-3">
                            Promo Code
                        </p>

                        <input
                            type="text"
                            placeholder="Enter your code"
                            className="w-full h-[38px] px-3 bg-white border-none text-[11px] outline-none placeholder:text-gray-400"
                        />

                        <button
                            type="button"
                            className="mt-3 px-5 h-[32px] bg-[#f27676] text-white text-[10px] font-medium hover:bg-[#e86666] transition"
                        >
                            APPLY
                        </button>

                    </div>

                    {/* Customer Email */}
                    <div className="mt-7">
                        <p className="text-[10px] uppercase font-bold mb-3">
                        Email Address
                        </p>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full h-[38px] px-3 bg-white border-none text-[11px] outline-none placeholder:text-gray-400"
                        />
                    </div>

                    {/* Total */}
                    <div className="border-t border-[#dedede] mt-7 pt-5">
                        <div className="flex justify-between text-[11px] font-bold">
                            <span>
                                TOTAL COST
                            </span>
                            <span>
                                ${total.toFixed(2)}
                            </span>
                        </div>

                    </div>


                    {/* Checkout */}
                    <button
                        type="button"
                        onClick={handleCheckout}
                        className="w-full h-[38px] mt-5 bg-[#5B21B6] text-white text-[10px] font-medium hover:bg-[#5B21B6] transition"
                    >
                    CHECKOUT
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Cart;