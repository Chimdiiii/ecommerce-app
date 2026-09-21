import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ToastNotification from "./ToastNotification";
import Footer from "./Footer";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface LayoutProps {
    cart: CartItem[];
    message: string;
}

function Layout({ cart, message }: LayoutProps) {
    return (
        <>
            <Navbar cart={cart} />

            <ToastNotification message={message} />

            <main>
                <Outlet />
            </main>

            <Footer/>
        </>
    );
}

export default Layout;