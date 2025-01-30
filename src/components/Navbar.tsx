import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, useCurrentUser } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);
  // console.log(user?.imageUrl);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="sticky bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <Link to="/" className="text-3xl font-bold">
            <span className="text-[#FFD700]">BookBazaar</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-lg hover:text-[#FFD700]">
              Home
            </Link>
            <Link to="/all-product" className="text-lg hover:text-[#FFD700]">
              All Products
            </Link>
            <Link to="/about-us" className="text-lg hover:text-[#FFD700]">
              About Us
            </Link>
            {!user && (
              <Link to="/login" className="text-lg hover:text-[#FFD700]">
                Login
              </Link>
            )}

            {user && (
              <div className="relative">
                {/* Avatar */}
                <div
                  className="rounded-full overflow-hidden cursor-pointer"
                  onClick={toggleDropdown}
                  aria-label="User Menu"
                >
                  <img
                    src={user?.imageUrl}
                    alt="User Avatar"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </div>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-whit z-10  border border-gray-200 rounded-lg shadow-lg">
                    <ul className="py-1">
                      <li>
                        {user && (
                          <Link
                            to={`/${user.role}/dashboard`}
                            className="block w-full text-left px-4 py-2 hover:bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] "
                          >
                            Dashboard
                          </Link>
                        )}
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] space-y-4 py-4 px-6">
          <Link to="/" className="block text-lg hover:text-[#FFD700]">
            Home
          </Link>
          <Link
            to="/all-product"
            className="block text-lg hover:text-[#FFD700]"
          >
            All Products
          </Link>
          <Link to="/about-us" className="block text-lg hover:text-[#FFD700]">
            All Products
          </Link>
          {!user && (
            <Link to="/login" className="block text-lg hover:text-[#FFD700]">
              About Us
            </Link>
          )}
          {user && (
            <Link
              to={`/${user.role}/dashboard`}
              className="block text-lg hover:text-[#FFD700]"
            >
              Dashboard
            </Link>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className="block w-full text-left text-lg hover:text-[#FFD700]"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
