import React, { ReactNode } from "react";  
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
   <button className="relative overflow-hidden w-full h-10 p-[10px] gap-1 rounded-[10px] flex items-center justify-center text-white font-medium bg-[#335CFF] border border-white/12 shadow-[0px_0px_0px_1px_#335CFF,0px_1px_2px_0px_rgba(14,18,27,0.24)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/16 before:to-transparent hover:opacity-95 transition-opacity">
  {children}
</button>
  );
} 