import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export function useCart() {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [message, setMessage] = useState("");

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product: Product) {
        setCart((currentCart) => {
            const existing = currentCart.find(
                (item) => item.id === product.id
            );

            return existing
                ? currentCart.map((item) =>
                      item.id === product.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item
                  )
                : [...currentCart, { ...product, quantity: 1 }];
        });

        setMessage(`${product.title} has been added to the cart.`);
        setTimeout(() => setMessage(""), 1000);
    }

    function increaseQuantity(productId: number) {
        setCart((currentCart) =>
            currentCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    function decreaseQuantity(productId: number) {
        setCart((currentCart) =>
            currentCart
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    function removeFromCart(productId: number) {
        setCart((currentCart) =>
            currentCart.filter((item) => item.id !== productId)
        );
    }

    return {
        cart,
        message,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    };
}