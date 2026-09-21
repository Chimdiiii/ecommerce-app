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
}: LayoutProps){

    return (
        <AuthBackground>
            <div className=" min-h-screen flex flex-col">
            <AuthNavbar
                text={text}
                linkText={linkText}
                linkTo={linkTo} 
            />
            <main className="flex-1">
                {children}
            </main>
            <Footer/>    
        </div>
        </AuthBackground>
    );    
}
export default Layout;