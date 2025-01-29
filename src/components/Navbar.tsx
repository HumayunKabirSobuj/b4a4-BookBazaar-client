// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { logout, useCurrentUser } from "../redux/features/auth/authSlice";
// import { MdLogout } from "react-icons/md";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const user = useAppSelector(useCurrentUser);
//   const dispatch = useAppDispatch();
//   // console.log(user);
//   const handleLogout = () => {
//     // console.log('logout ....');
//     dispatch(logout());
//   };

//   return (
//     <nav className="sticky  bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white  top-0 left-0 w-full z-10">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center">
//             <Link to={"/"} className="text-3xl font-bold">
//               <span className="text-[#FFD700]">BookBazaar</span>
//             </Link>
//           </div>
//           <div className="hidden md:flex space-x-8 md:items-center">
//             <Link to={"/"} className="text-xl hover:text-[#FFD700]">
//               Home
//             </Link>

//             {!user && (
//               <Link to={"/login"} className=" text-xl hover:text-[#FFD700]">
//                 Login
//               </Link>
//             )}
//             {user && (
//               <Link to={"/dashboard"} className="text-xl hover:text-[#FFD700]">
//                 Dashboard
//               </Link>
//             )}
//             {user && (
//               <div className="text-2xl">
//                 <button onClick={() => handleLogout()}>
//                   <MdLogout />
//                 </button>
//               </div>
//             )}
//             {user && (
//               <div className="flex items-center justify-center">
//                 <div className="w-12 h-12 rounded-full overflow-hidden">
//                   <img
//                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                     alt="Avatar"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-2xl">
//               {isMenuOpen ? "✖" : "☰"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
//         <div className="space-y-4 py-4 px-6 bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]">
//           <a
//             href="#home"
//             className="block text-lg text-white hover:text-[#FFD700]"
//           >
//             Home
//           </a>
//           <a
//             href="#products"
//             className="block text-lg text-white hover:text-[#FFD700]"
//           >
//             Products
//           </a>
//           <a
//             href="#about"
//             className="block text-lg text-white hover:text-[#FFD700]"
//           >
//             About
//           </a>
//           <a
//             href="#contact"
//             className="block text-lg text-white hover:text-[#FFD700]"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, useCurrentUser } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);

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
                  className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
                  onClick={toggleDropdown}
                  aria-label="User Menu"
                >
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
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
          {!user && (
            <Link to="/login" className="block text-lg hover:text-[#FFD700]">
              Login
            </Link>
          )}
          {user && (
            <Link
              to="/dashboard"
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
