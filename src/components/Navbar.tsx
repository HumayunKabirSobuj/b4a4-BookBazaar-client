import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky  bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white  top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to={"/"} className="text-3xl font-bold">
              <span className="text-[#FFD700]">BookBazaar</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
          <Link to={"/"} className="hover:text-[#FFD700]">
              Home
            </Link>
            <a href="#products" className="hover:text-[#FFD700]">
              Products
            </a>
            <a href="#about" className="hover:text-[#FFD700]">
              About
            </a>
            <a href="#contact" className="hover:text-[#FFD700]">
              Contact
            </a>
            <Link to={"/login"} className="hover:text-[#FFD700]">
              Login
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="space-y-4 py-4 px-6 bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]">
          <a
            href="#home"
            className="block text-lg text-white hover:text-[#FFD700]"
          >
            Home
          </a>
          <a
            href="#products"
            className="block text-lg text-white hover:text-[#FFD700]"
          >
            Products
          </a>
          <a
            href="#about"
            className="block text-lg text-white hover:text-[#FFD700]"
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-lg text-white hover:text-[#FFD700]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
