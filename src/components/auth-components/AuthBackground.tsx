import { ReactNode } from "react";


function AuthBackground() {
    return (
        <div
            className="absolute inset-0 z-0 overflow-hidden bg-cover bg-center bg-no-repeat sm:bg-center"
            style={{
                backgroundImage: "url('/auth-background.png')",
            }}
        />
    );
}

export default AuthBackground;