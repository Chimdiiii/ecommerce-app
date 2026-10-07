import Footer from "../Footer";
import AuthBackground from "./AuthBackground";
import AuthNavbar from "./AuthNavbar";
import { ReactNode } from "react";

interface LayoutProps {
    text: string;
    linkText: string;
    linkTo: string;
    children: ReactNode;
}

function Layout({
    text,
    linkText,
    linkTo,
    children,
}: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Navbar and Page content */}
            <div className="relative flex-1">
                <AuthBackground />
                <div className="relative z-10 min-h-full flex flex-col">
                    <AuthNavbar
                        text={text}
                        linkText={linkText}
                        linkTo={linkTo}
                    />

                    <main className="flex-1">
                        {children}
                    </main>

                </div>
            </div>
            <Footer />

        </div>
    );
}

export default Layout;