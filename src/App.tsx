import { Routes, Route } from "react-router-dom";
import { useCart } from "./hooks/UseCart";

import Layout from "./components/Layout";
import Home from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import LoginPage from "./pages/auth-pages/LoginPage";
import RegisterPage from "./pages/auth-pages/RegisterPage";
import ResetPasswordPage from "./pages/auth-pages/ResetPassword";
import EmailVerificationPage from "./pages/auth-pages/EmailVerificationPage";

function App() {
    const {
        cart,
        message,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();

    return (
        <Routes>
            {/* Shop */}
            <Route
                element={
                    <Layout
                        cart={cart}
                        message={message}
                    />
                }
            >
                <Route
                    path="/"
                    element={<Home addToCart={addToCart} />}
                />

                <Route
                    path="/product/:id"
                    element={<ProductDetails addToCart={addToCart} />}
                />

                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                            removeFromCart={removeFromCart}
                        />
                    }
                />

                <Route
                    path="/categories"
                    element={<Categories addToCart={addToCart} />}
                />
            </Route>

            {/* Authentication */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/verify-email" element={<EmailVerificationPage />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;