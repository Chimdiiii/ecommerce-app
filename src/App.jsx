import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";

function App() {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  function addToCart(product) {

    const existing = cart.find(
      item => item.id === product.id
    );

    if (existing) {
      setCart( cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 }: item));
    } else {
      setCart([...cart,{...product,quantity: 1}]);
    }
  }

  return (
    <Routes>
      <Route element={<Layout cart={cart} />}>
        <Route path="/" element={<Home addToCart={addToCart}/>}/>
        <Route path="/product/:id" element={ <ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />}/>
      </Route>
    </Routes>
  );
}

export default App;