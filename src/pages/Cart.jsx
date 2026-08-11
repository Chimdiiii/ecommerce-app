import { Link } from "react-router-dom";

function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
    if (cart.length === 0) {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <p>Your cart is empty.</p>
                <Link to="/">
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
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cart.map(item => (
                <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                        <div className="quantity-controls">
                           <button onClick={() => decreaseQuantity(item.id)}> − </button>
                           <span>{item.quantity}</span>
                           <button onClick={() => increaseQuantity(item.id)}>+ </button>
                           <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                       </div>
                       <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                </div>
            ))}

            <h2>Total: ${total.toFixed(2)}</h2>
            <Link to="/">Continue Shopping</Link>
        </div>
    );

}

export default Cart;