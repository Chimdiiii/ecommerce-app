import { Outlet, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ cart}){
    return(
        <div>
            <Navbar cart={cart} />
            <Outlet />
            <footer>
                <p>&copy; 2023 Fashion. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout;