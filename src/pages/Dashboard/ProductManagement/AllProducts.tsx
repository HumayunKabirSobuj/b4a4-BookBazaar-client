import { useState } from "react";
import { useGetAllBookDataQuery } from "../../../redux/features/productManagement/productApi";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { Pagination } from "../../../components/Shared/Pagination";
import { ChevronDown, Filter, Search } from "lucide-react";

type TBook = {
  authorEmail: string;
  authorName: string;
  category: string;
  description: string;
  imageUrl: string;
  isAvaillable: boolean;
  isDeleted: boolean;
  numberOfBooks: number;
  price: string;
  title: string;
  __v: number;
  _id: string;
};

const itemsPerPage = 12;

const AllProducts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceSort, setPriceSort] = useState("none");
  const [showFilters, setShowFilters] = useState(false);

  const { data, isLoading } = useGetAllBookDataQuery(undefined);

  // console.log(data);

  const allBooks = data?.data;

  const availlableBooks = allBooks?.filter(
    (book: TBook) => book.numberOfBooks > 0
  );

  // console.log(availlableBooks);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <ScaleLoader color="#1ca944" />
      </div>
    );
  }

  const filteredAndSortedBooks =
    availlableBooks
      // 1️⃣ Filter by Category
      ?.filter((book: TBook) => {
        if (activeTab === "all") return true;
        if (activeTab === "education") return book.category === "academic";
        return book.category === activeTab;
      })

      // 2️⃣ Filter by Search Term
      ?.filter((book: TBook) => {
        const search = searchTerm.toLowerCase().trim();

        return (
          book?.title?.toLowerCase().includes(search) ||
          book?.authorName?.toLowerCase().includes(search) ||
          book?.category?.toLowerCase().includes(search)
        );
      })

      // 3️⃣ Sort by Price
      ?.sort((a: TBook, b: TBook) => {
        if (priceSort === "low-to-high") {
          return parseFloat(a.price) - parseFloat(b.price);
        } else if (priceSort === "high-to-low") {
          return parseFloat(b.price) - parseFloat(a.price);
        }
        return 0; // No sorting
      }) || [];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBooks = filteredAndSortedBooks?.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredAndSortedBooks?.length / itemsPerPage);
  // উপরের গুলো ব্যবহার করা হয়েছে

  return (
    <div className="container mx-auto">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4 mt-5">Explore All Books</h1>

        {/*  */}
        <div>
          <div className="flex lg:flex-row gap-4 items-center justify-between px-5 pt-5 pb-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by title or category"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition-all duration-200"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 px-5">
                {/* Status Filter */}

                {/* Price Sort */}
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    Sort by Price
                  </label>
                  <select
                    value={priceSort}
                    onChange={(e) => setPriceSort(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="none" className="bg-gray-800">
                      No Sorting
                    </option>
                    <option value="low-to-high" className="bg-gray-800">
                      Price: Low to High
                    </option>
                    <option value="high-to-low" className="bg-gray-800">
                      Price: High to Low
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    Filter by Category
                  </label>
                  <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="all" className="bg-gray-800">
                      All
                    </option>
                    <option value="fiction" className="bg-gray-800">
                      Fiction
                    </option>
                    <option value="education" className="bg-gray-800">
                      Academic
                    </option>
                    <option value="children" className="bg-gray-800">
                      Children
                    </option>
                  </select>
                </div>
              </div>
              {/* Active Filters Display */}
              {(searchTerm || priceSort !== "none" || activeTab !== "all") && (
                <div className=" flex flex-wrap gap-2">
                  <span className="text-sm text-purple-300">
                    Active filters:
                  </span>

                  {searchTerm && (
                    <span className="px-2  bg-purple-500/20 text-purple-300 rounded text-xs">
                      Search: "{searchTerm}"
                    </span>
                  )}

                  {priceSort !== "none" && (
                    <span className="px-2  bg-green-500/20 text-green-300 rounded text-xs">
                      Sort:{" "}
                      {priceSort === "low-to-high" ? "Price ↑" : "Price ↓"}
                    </span>
                  )}

                  {activeTab !== "all" && (
                    <span className="px-2  bg-blue-500/20 text-blue-300 rounded text-xs capitalize">
                      Category:{" "}
                      {activeTab === "education" ? "Academic" : activeTab}
                    </span>
                  )}

                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setPriceSort("none");
                      setActiveTab("all"); // Clear category filter too
                    }}
                    className="px-2 bg-red-500/20 text-red-300 rounded text-xs hover:bg-red-500/30 transition-colors"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        {/*  */}

        <div className="">
          <div className="mt-4">
            <div className=" rounded">
              <div className="grid lg:grid-cols-4 gap-5 px-5 md:grid-cols-2 grid-cols-1">
                {availlableBooks?.length ? (
                  paginatedBooks.map((item: TBook) => (
                    <div
                      key={item._id}
                      className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]  rounded-lg shadow-lg text-white"
                    >
                      <div className="flex items-center justify-center mb-4">
                        <img
                          src={item?.imageUrl}
                          alt="Book Cover"
                          className="w-full h-48 rounded-md shadow-md"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item?.title.slice(0, 30)} ...
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {item.description.slice(0, 200)} ...
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-400">
                          ট {item?.price}
                        </span>
                        <Link
                          to={`/product-details/${item._id}`}
                          className="px-4 py-2 text-sm font-medium transition text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-300">No books found.</p>
                )}
              </div>
            </div>
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
