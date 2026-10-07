import { useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";

const LogoutPage = () => {
    useEffect(() => {
        const logout = async () => {
            await supabase.auth.signOut();
        };

        logout();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#eef0f3]">
            <div className="bg-white p-10 text-center shadow-sm">
                <h1 className="text-2xl font-medium text-[#0E121B]">
                    You've been logged out
                </h1>

                <p className="text-sm text-slate-500 mt-2">
                    Your account has been successfully logged out.
                </p>

                <Link
                    to="/login"
                    className="inline-block mt-6 px-6 py-3 bg-[#5B21B6] text-white text-sm hover:bg-[#4C1D95] transition"
                >
                    Back to Login
                </Link>
            </div>
        </div>
    );
};

export default LogoutPage;