import { ReactNode } from "react";

interface AuthBackgroundProps {
    children: ReactNode;
}

function AuthBackground({ children }: AuthBackgroundProps) {
    return (
        <div
            className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/auth-background.png')",
            }}
        >
            {children}
        </div>
    );
}

export default AuthBackground;