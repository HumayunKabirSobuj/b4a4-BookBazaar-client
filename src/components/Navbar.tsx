"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, useCurrentUser } from "../redux/features/auth/authSlice";
import { TBook } from "../pages/Dashboard/ProductManagement/AllProducts";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { removeFromCart } from "../redux/features/Cart/CartSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  // Sample cart items - replace with your actual cart data

  const products: TBook[] = useSelector((state: any) => state.cart.products); // or with type if you have RootState


  const handleMakePayment = (item: any) => {
    // Handle individual item payment
    console.log("Making payment for:", item.title);
    // You can add your payment logic here
    // For example: navigate to payment page with item details
    // or open a payment modal
  };


  return (
    <>
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
                <div className="flex items-center space-x-4">
                  {/* Cart Button */}
                  <button
                    onClick={toggleCartModal}
                    className="relative p-2 hover:text-[#FFD700] transition-colors duration-200"
                    aria-label="Shopping Cart"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"
                      />
                    </svg>
                    {products.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-[#FFD700] text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                        {products.length}
                      </span>
                    )}
                  </button>

                  {/* User Avatar */}
                  <div className="relative">
                    <div
                      className="rounded-full overflow-hidden cursor-pointer"
                      onClick={toggleDropdown}
                      aria-label="User Menu"
                    >
                      <img
                        src={user?.imageUrl || "/placeholder.svg"}
                        alt="User Avatar"
                        className="w-[40px] h-[40px] rounded-full"
                      />
                    </div>

                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white z-20 border border-gray-200 rounded-lg shadow-lg">
                        <ul className="py-1">
                          <li>
                            <Link
                              to={`/${user.role}/dashboard`}
                              className="block w-full text-left px-4 py-2 hover:bg-gradient-to-b from-[#2B1E36] via-[#3B2E46] to-[#2B1E36]"
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handleLogout}
                              className="block w-full text-left px-4 py-2 hover:bg-gradient-to-b from-[#2B1E36] via-[#3B2E46] to-[#2B1E36]"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
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
              About Us
            </Link>
            {!user && (
              <Link to="/login" className="block text-lg hover:text-[#FFD700]">
                Login
              </Link>
            )}
            {user && (
              <>
                <button
                  onClick={toggleCartModal}
                  className="flex items-center space-x-2 text-lg hover:text-[#FFD700] w-full text-left"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"
                    />
                  </svg>
                  <span>Cart ({products.length})</span>
                </button>
                <Link
                  to={`/${user.role}/dashboard`}
                  className="block text-lg hover:text-[#FFD700]"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-lg hover:text-[#FFD700]"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>

      {/* Cart Modal */}
      {isCartModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center py-4">
          <div className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white rounded-lg shadow-xl w-full md:w-2/3 max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-600">
              <h2 className="text-2xl font-bold text-[#FFD700]">
                Shopping Cart
              </h2>
              <button
                onClick={toggleCartModal}
                className="text-2xl hover:text-[#FFD700] transition-colors duration-200"
                aria-label="Close Cart"
              >
                ✖
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[60vh] ">
              {products.length === 0 ? (
                <div className="text-center py-8">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8m-8 0a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z"
                    />
                  </svg>
                  <p className="text-gray-400">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {products.map((item, index) => (
                    <div
                      key={item._id}
                      className="flex items-center space-x-4 p-3 bg-gradient-to-r from-[#2B1E36] to-[#3B2E46] rounded-lg"
                    >
                      <img
                        src={item?.imageUrl || "/placeholder.svg"}
                        alt={item.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{item.title}</h3>
                        <p className="text-[#FFD700] font-bold">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        {/* Make Payment Button */}
                        <button
                          onClick={() => handleMakePayment(item)}
                          className=" text-black px-3 py-1 rounded  font-semibold  text-4xl"
                        >
                          <FaShoppingCart className="text-blue-500" />
                        </button>
                        {/* Delete Button */}
                        <button
                          onClick={() => dispatch(removeFromCart(index))}
                          className="text-red-400 hover:text-red-300 transition-colors duration-200 flex justify-center text-4xl"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
