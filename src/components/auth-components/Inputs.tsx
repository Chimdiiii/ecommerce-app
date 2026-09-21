import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
import { RiInformationFill } from "react-icons/ri";
import Button from "./Buttons";

export default function NewInputs(){
  // Password input state and toggle (moved here to avoid nested exports)
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
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

    <form className="space-y-5 align-items-center justify-center" action="#" method="POST">
        {/* name section */}
    <div className="flex flex-col ">
            <label className="text-[14px] text-black ">
            Full Name <span className="text-blue-600">*</span>
            </label>
            <div className="relative flex items-center">
              <RiUser6Line className="absolute left-3.5 text-slate-400 text-lg pointer-events-none" />
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                required 
                placeholder="John Brown" 
                className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
              />
            </div>
          </div>
          {/* email section */}
          
          <label className="text-[14px] text-black  ">
              Email Address<span className="text-blue-600">*</span>
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
    placeholder="hello@alignui.com" 
    className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
  />
</div>

     {/* password */}
      <div>
        <label className=" text-[14px]  text-black ">
             Password<span className="text-blue-600">*</span>
            </label>
       <div className="relative flex items-center">
        {/* React Icon positioned absolutely */}
        <CiLock className="absolute left-3.5 text-slate-400 text-xl pointer-events-none" />

        {/* Input field with pl-11 to prevent text from overlapping the icon */}
        <input
         type={showPassword ? "text" : "password"}
          id="password"
          name="password"
         placeholder="• • • • • • • • • •"
           className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
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
      

 {/* Password Requirements Checklist Line */}
        <div className="flex items-center gap-1.5 mt-2 text-[12px] leading-[16px] text-[#99A0AE]">
  <RiInformationFill className="text-sm shrink-0 text-[#99A0AE]" />
  <p>Must contain 1 uppercase letter, 1 number and min. 8 characters</p>
</div>
        </div>
       <Button type="submit">Register</Button>
        {/* terms and conditions */}
        <div  > <span><p className="text-center text-[#525866] text-[14px] ">By clicking Register, you agree to accept Apex Financial's</p ></span>
         
      </div>
    </form>
    </>
    );
} 
export function LoginInputs(){
  // Password input state and toggle (moved here to avoid nested exports)
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
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

    <form className="space-y-5" action="#" method="POST">
      
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
                placeholder="hello@alignui.com" 
                className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
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
         placeholder="• • • • • • • • • •"
           className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
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
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-slate-600 cursor-pointer select-none">
              keep me logged in
            </label>
             <Link to ="/reset-password" className="text-[#525866] font-[Inter] text-[14px]  underline decoration-solid underline-offset-1 ml-30 ">
             Forgot password?
              </Link>
          </div>

     <Link to="/"><Button >Login</Button></Link>
    </form>
    </>
       );
}
export function ResetInputs(){
       return(
    <>
       {/* header */}
        <div className="text-center mb-2">
      <h1 className="text-2xl font-medium leading-8 text-center text-[#0E121B]">Reset Password</h1>
      <p className="text-sm text-slate-500 mt-1">Enter your details to reset your password.</p>
    </div>

     {/* Divider */}
      <div className=" mb-5 h-px w-full bg-gray-200" />

    <form className="align-center justify-center flex-col items-center gap-5" action="#" method="POST">
      
          {/* email section */}
          <label className="text-[14px]   text-black ">
              Email Address
            </label>
             <div className="relative flex items-center">
                
              <MdMailOutline className="absolute left-3.5 text-slate-400 text-xl pointer-events-none" />
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="hello@alignui.com" 
               className="w-[376px] h-10 py-[10px] pr-[10px] pl-10 rounded-[10px] bg-[#FFFFFF] border border-[#E1E4EA] text-[#0E121B] placeholder:text-[#99A0AE] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
              />
            </div>

    <div  className="align-center justify-center flex-col items-center gap-3 mt-5 text-xs">
      <Button type="submit">Reset Password</Button>
      <div className="mt-5">
      
         <span className="text-center"><p>Don't have access anymore?</p ></span>

          <span className="text-center "><a href="#" className="text-black font-medium underline "><p className="mt-2">Try another method</p></a></span>
          </div>
         </div>
      

    </form>
    </>
       );
}
export function VerifyInputs(){
const email = "hello@alignui.com"
  return(
  
      
        <>
        <div className="text-center mb-4">
          {/* Title & Description */}
          <h1 className="text-2xl font-medium leading-8 text-center text-[#0E121B]">Enter verification code</h1>
          <p className="text-sm text-slate-500 mt-2 mb-4 leading-relaxed">
            We've sent a  code to {email}. 
          </p>
        </div>
         {/* Divider */}
      <div className="mb-5 h-px w-full bg-gray-200" />
        <form  className="space-y-6">
         <div className="flex items-center justify-center gap-2 w-94">
  {/* Input 1 */}
  <input
    type="text"
    inputMode="numeric"
    maxLength={1}
    className="w-[86.5px] h-16 py-4 px-2 text-center text-xl font-bold text-[#0E121B] bg-[#FFFFFF] border border-[#E1E4EA] rounded-[10px] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
  />

  {/* Input 2 */}
  <input
    type="text"
    inputMode="numeric"
    maxLength={1}
    className="w-[86.5px] h-16 py-4 px-2 text-center text-xl font-bold text-[#0E121B] bg-[#FFFFFF] border border-[#E1E4EA] rounded-[10px] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
  />

  {/* Input 3 */}
  <input
    type="text"
    inputMode="numeric"
    maxLength={1}
    className="w-[86.5px] h-16 py-4 px-2 text-center text-xl font-bold text-[#0E121B] bg-[#FFFFFF] border border-[#E1E4EA] rounded-[10px] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
  />

  {/* Input 4 */}
  <input
    type="text"
    inputMode="numeric"
    maxLength={1}
    className="w-[86.5px] h-[64px] py-4 px-2 text-center text-xl font-bold text-[#0E121B] bg-[#FFFFFF] border border-[#E1E4EA] rounded-[10px] shadow-[0px_1px_2px_0px_#0A0D1408] focus:outline-none focus:border-[#335CFF] focus:ring-1 focus:ring-[#335CFF] transition-all"
  />
</div>
          {/* Submit Button */}
            <Button type="submit">Submit code</Button>
        </form>
      

    
        <div className="flex-col justify-center mt-8 text-xs text-slate-500">
          <p className="text-center">
            Experiencing issues receiving the code?{" "}
          </p>
         <a href="#" className=" text-black hover:text-indigo-500 transition-colors underline">
                <p className="text-center text-[14px] mt-1">Resend code</p>
              </a>
        </div>
        </>
        );
}




