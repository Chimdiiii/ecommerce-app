import { Outlet, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ cart}){
    return(
        <>
            <Navbar cart={cart} />
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