import { Outlet, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ToastNotification from "./ToastNotification";

function Layout({ cart, message }) {
    return(
        <>
            <Navbar cart={cart} />
            <ToastNotification message={message} />
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2026 Fashion. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Layout;