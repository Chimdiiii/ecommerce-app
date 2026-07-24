import { Link } from "react-router-dom";

function Cart({ cart }) {
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
                        <p>Quantity: {item.quantity}</p>
                    </div>
                </div>
            ))}

            <h2>Total: ${total.toFixed(2)}</h2>
            <Link to="/">Continue Shopping</Link>
        </div>
    );

}

export default Cart;