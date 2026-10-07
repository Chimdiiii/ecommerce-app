import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { CiLock } from "react-icons/ci";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
import { RiInformationFill } from "react-icons/ri";
import Button from "./Buttons";
import { supabase } from "../../lib/supabase";

export default function NewInputs() {
    const [showPassword, setShowPassword] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const toggleVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
        setError(
            "Password must contain at least 1 uppercase letter, 1 number, and 8 characters."
        );
        setLoading(false);
        return;
        }
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                },
                emailRedirectTo: `${window.location.origin}/verify-email`,
            },
        });

        setLoading(false);

        if (error) {
    console.error("SUPABASE SIGNUP ERROR:", error);
    console.error("ERROR MESSAGE:", error.message);

    setError(error.message);
    return;
}

        alert("Account created successfully! Check your email to verify your account.");
    };

    return(
    <>
    {/* header */}
        <div className="text-center mb-8">
      <h1 className="text-2xl font-medium leading-8 text-center text-[#0E121B]">Create a new account</h1>
      <p className="text-sm text-slate-500 mt-1">Enter your details to register</p>
    </div>

     {/* Divider */}
      <div className="mb-5 h-px w-full bg-gray-200" />

    <form className="space-y-5 align-items-center justify-center" onSubmit={handleRegister}>
        {/* name section */}
    <div className="flex flex-col ">
            <label className="text-[14px] text-black ">
            Full Name <span className="text-[#5B21B6]">*</span>
            </label>
            <div className="relative flex items-center">
              <RiUser6Line className="absolute left-3.5 text-slate-400 text-lg pointer-events-none" />
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                required 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Brown" 
                className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#5B21B6] transition-all"
              />
            </div>
          </div>
          {/* email section */}
          
          <label className="text-[14px] text-black  ">
              Email Address<span className="text-[#5B21B6]">*</span>
            </label>
            <div className="relative flex items-center">
  {/* Absolute Icon */}
  <MdMailOutline className="absolute left-3.5 text-[#99A0AE] text-xl pointer-events-none" />

  {/* Email Input */}
  <input 
    type="email" 
    id="email" 
    name="email" 
    required 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="hello@mail.com" 
    className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#5B21B6] focus:ring-1 focus:ring-[#5B21B6] transition-all"
  />
</div>

     {/* password */}
      <div>
        <label className=" text-[14px]  text-black ">
             Password<span className="text-[#5B21B6]">*</span>
            </label>
       <div className="relative flex items-center">
        {/* React Icon positioned absolutely */}
        <CiLock className="absolute left-3.5 text-slate-400 text-xl pointer-events-none" />

        <input
         type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="• • • • • • • • • •"
          className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#5B21B6] focus:ring-1 focus:ring-[#5B21B6] transition-all"
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none dark:hover:text-gray-300 mr-3"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
    {showPassword ? (
      <RiEyeOffLine className="text-xl" aria-hidden="true" />
    ) : (
      <RiEyeLine className="text-xl" aria-hidden="true" />
    )}
  </button>
      </div>
      

 {/* Password Requirements*/}
        <div className="flex items-center gap-1.5 mt-2 text-[12px] leading-[16px] text-[#99A0AE]">
            <RiInformationFill className="text-sm shrink-0 text-[#99A0AE]" />
            <p>Must contain 1 uppercase letter, 1 number and min. 8 characters</p>
        </div>
        </div>
        {error && (
           <p className="text-sm text-red-500">
           {error}
           </p>
        )}     
       <Button type="submit">
           {loading ? "Creating account..." : "Register"}
        </Button>
    </form>
    </>
    );
} 


export function LoginInputs() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const toggleVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleLogin = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            setError(error.message);
            return;
        }

        window.location.href = "/";
    };

    return(
    <>
       {/* header */}
        <div className="text-center mb-8">
      <h1  className="text-2xl font-medium leading-8 text-center text-[#0E121B]">Login to your account</h1>
      <p className="text-sm text-slate-500 mt-1">Enter your details to login</p>
    </div>

     {/* Divider */}
      <div className="mb-5 h-px w-full bg-gray-200" />

    <form className="space-y-5" onSubmit={handleLogin}>
      
          {/* email section */}
          <label className="text-[14px]  text-black ">
              Email Address
            </label>
             <div className="relative flex items-center">
                
              <MdMailOutline className="absolute left-3.5 text-slate-400 text-xl pointer-events-none" />
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@alignui.com" 
                className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#5B21B6] focus:ring-1 focus:ring-[#5B21B6] transition-all"
              />
            </div>

      
     {/* password */}
      <div>
        <label className="text-[14px]  text-black ">
              Password
            </label>
       <div className="relative flex items-center">
        {/* React Icon positioned absolutely */}
        <CiLock className="absolute left-3.5 text-slate-400 text-xl pointer-events-none" />

         {/* Input field with pl-11 to prevent text from overlapping the icon */}
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="• • • • • • • • • •"
          className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#5B21B6] focus:ring-1 focus:ring-[#5B21B6] transition-all"
        />
        <button
            type="button"
            onClick={toggleVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none dark:hover:text-gray-300 mr-3"
            aria-label={showPassword ? "Hide password" : "Show password"}
        >
            {showPassword ? (
            <RiEyeOffLine className="text-xl" aria-hidden="true" />
            ) : (
            <RiEyeLine className="text-xl" aria-hidden="true" />
            )}
        </button>
      </div>
      </div>

          {/* Remember Me */}
          <div className="flex ">
            <input 
            type="checkbox"
              id="remember" 
              name="remember" 
              className="h-4 w-4 rounded border-slate-300 text-[#5B21B6] focus:ring-[#5B21B6] cursor-pointer"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-slate-600 cursor-pointer select-none">
              keep me logged in
            </label>
             <Link to ="/reset-password" className="text-[#525866] font-[Inter] text-[14px]  underline decoration-solid underline-offset-1 ml-30 ">
             Forgot password?
              </Link>
          </div>
          {error && (
             <p className="text-sm text-red-500">
              {error}
            </p>
          )}
          <Button type="submit">
              {loading ? "Logging in..." : "Login"}
          </Button>
          </form>
         </>
    );
}
export function ResetInputs() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [recoveryMode, setRecoveryMode] = useState(false);

    useEffect(() => {
        const checkRecoverySession = async () => {
            const { data } = await supabase.auth.getSession();

            if (data.session) {
                setRecoveryMode(true);
            }
        };

        checkRecoverySession();
    }, []);

    const handleResetRequest = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        setMessage("");

        const { error } =
            await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });

        if (error) {
            setError(error.message);
        } else {
            setMessage(
                "Password reset instructions have been sent to your email."
            );
        }

        setLoading(false);
    };

    const handlePasswordUpdate = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setMessage("");

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError(
                "Password must contain at least 1 uppercase letter."
            );
            return;
        }

        if (!/\d/.test(password)) {
            setError(
                "Password must contain at least 1 number."
            );
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        const { error } = await supabase.auth.updateUser({
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            setMessage("Your password has been updated successfully.");
            setPassword("");
            setConfirmPassword("");
        }

        setLoading(false);
    };

    /*
     * USER ARRIVED FROM THE RESET EMAIL
     */
    if (recoveryMode) {
        return (
            <>
                <div className="text-center mb-2">
                    <h1 className="text-2xl font-medium leading-8 text-[#0E121B]">
                        Create a new password
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        Enter your new password below.
                    </p>
                </div>

                <div className="mb-5 h-px w-full bg-gray-200" />

                <form
                    className="space-y-5"
                    onSubmit={handlePasswordUpdate}
                >
                    <div>
                        <label className="text-[14px] text-black">
                            New Password
                        </label>

                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="••••••••"
                            className="w-[376px] h-10 py-[10px] px-3 rounded-[10px] bg-white border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#5B21B6] focus:ring-1 focus:ring-[#5B21B6] transition-all"
                        />
                    </div>

                    <div>
                        <label className="text-[14px] text-black">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            placeholder="••••••••"
                            className="w-[376px] h-10 py-[10px] px-3 rounded-[10px] bg-white border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#5B21B6] focus:ring-1 focus:ring-[#5B21B6] transition-all"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-500 text-center">
                            {error}
                        </p>
                    )}

                    {message && (
                        <p className="text-sm text-green-600 text-center">
                            {message}
                        </p>
                    )}

                    <Button type="submit">
                        {loading
                            ? "Updating..."
                            : "Update Password"}
                    </Button>
                </form>
            </>
        );
    }

    /*
     * USER IS REQUESTING A PASSWORD RESET
     */
    return (
        <>
            <div className="text-center mb-2">
                <h1 className="text-2xl font-medium leading-8 text-[#0E121B]">
                    Reset Password
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    Enter your email to reset your password.
                </p>
            </div>

            <div className="mb-5 h-px w-full bg-gray-200" />

            <form
                className="space-y-5"
                onSubmit={handleResetRequest}
            >
                <div>
                    <label className="text-[14px] text-black">
                        Email Address
                    </label>

                    <div className="relative flex items-center">
                        <MdMailOutline className="absolute left-3.5 text-slate-400 text-xl pointer-events-none" />

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="hello@mail.com"
                            className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-white border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#5B21B6] transition-all"
                        />
                    </div>
                </div>

                {error && (
                    <p className="text-sm text-red-500 text-center">
                        {error}
                    </p>
                )}

                {message && (
                    <p className="text-sm text-green-600 text-center">
                        {message}
                    </p>
                )}

                <Button type="submit">
                    {loading ? "Sending..." : "Reset Password"}
                </Button>

                <div className="text-xs text-center text-slate-500">
                    <p>Don't have access anymore?</p>

                    <a
                        href="#"
                        className="text-black font-medium underline"
                    >
                        Try another method
                    </a>
                </div>
            </form>
        </>
    );
}
export function VerifyInputs() {
    return (
        <>
            <div className="text-center mb-8">
                <h1 className="text-2xl font-medium leading-8 text-[#0E121B]">
                    Check your email
                </h1>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    We've sent a verification link to your email.
                    Please open the email and click the link to
                    verify your account.
                </p>
            </div>

            <div className="mb-5 h-px w-full bg-gray-200" />

            <div className="text-center space-y-4">
                <MdMailOutline className="mx-auto text-5xl text-[#5B21B6]" />

                <p className="text-sm text-slate-500">
                    Once you've verified your email, you can
                    return to the login page.
                </p>

                <Link
                    to="/login"
                    className="block w-full"
                >
                    <Button type="button">
                        Back to Login
                    </Button>
                </Link>
            </div>
        </>
    );
}