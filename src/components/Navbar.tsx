import { Link, NavLink } from "react-router-dom";

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface NavbarProps {
    cart: CartItem[];
}

function Navbar({ cart }: NavbarProps) {
    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
       <nav className="bg-white h-[75px] flex flex-wrap justify-between items-center px-[60px] shadow-[0_2px_10px_rgba(0,0,0,0.08)] sticky top-0 z-[100] max-[768px]:px-[20px] max-[768px]:h-[65px]">

            <NavLink
                to="/"
                className="text-[28px] text-black [font-family:'Great_Vibes',cursive]"
            >
                Fashion
            </NavLink>

            <div className="flex gap-[15px] flex-1 justify-end items-center max-[768px]:gap-[10px]">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `relative no-underline text-black text-[1.3rem] font-[200]
                        after:content-[''] after:absolute after:left-0 after:-bottom-[6px]
                        after:h-[2px] after:bg-[#5B21B6]
                        after:transition-[width] after:duration-300
                        ${
                            isActive
                                ? "after:w-full"
                                : "after:w-0 hover:after:w-full"
                        }`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                        `relative no-underline text-black text-[1.3rem] font-[200]
                        after:content-[''] after:absolute after:left-0 after:-bottom-[6px]
                        after:h-[2px] after:bg-[#5B21B6]
                        after:transition-[width] after:duration-300
                        ${
                            isActive
                                ? "after:w-full"
                                : "after:w-0 hover:after:w-full"
                        }`
                    }
                >
                    Categories
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `relative no-underline text-black text-[1.3rem] font-[200]
                        after:content-[''] after:absolute after:left-0 after:-bottom-[6px]
                        after:h-[2px] after:bg-[#5B21B6]
                        after:transition-[width] after:duration-300
                        ${
                            isActive
                                ? "after:w-full"
                                : "after:w-0 hover:after:w-full"
                        }`
                    }
                >
                    Contact us
                </NavLink>

                <Link
                    to="/cart"
                    className="relative flex items-center justify-center text-black no-underline ml-[5px]"
                >
                    <span className="text-2xl">
                        🛒
                    </span>

                    <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 flex items-center justify-center bg-[#5B21B6] text-white text-xs font-bold rounded-full">
                        {totalItems > 99 ? "99+" : totalItems}
                    </span>
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;