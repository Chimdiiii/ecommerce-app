import { Link } from "react-router-dom";

interface NavbarProps {
  text: string;
  linkText: string;
  linkTo: string;
}

function Navbar({ text, linkText, linkTo }: NavbarProps) {
  return (
    <nav className="sticky top-0 flex items-center px-4 py-5 sm:px-12">
  
      <div className="ml-auto flex items-center gap-1 text-[15px] text-gray-500">
        <span>{text}</span>

        <Link
          to={linkTo}
          className="font-semibold text-[#5B21B6] hover:underline"
        >
          {linkText}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;