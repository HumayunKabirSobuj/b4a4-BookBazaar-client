/* eslint-disable @typescript-eslint/no-unused-vars */

import { RingLoader } from "react-spinners";
import {
  useDeleteBookMutation,
  useGetAllBookDataQuery,
} from "../../../redux/features/productManagement/productApi";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";

import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useState } from "react";
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
const itemsPerPage = 7;

const ManageProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceSort, setPriceSort] = useState("none");
  const [showFilters, setShowFilters] = useState(false);

  const { data, isLoading } = useGetAllBookDataQuery(undefined, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    pollingInterval: 2000,
  });
  const [deleteBook] = useDeleteBookMutation();
  const user = useAppSelector(useCurrentUser);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <RingLoader size={80} color="#1ca944" />
      </div>
    );
  }

  const allBooksData = data?.data;

  const matchBook = allBooksData.filter(
    (item: TBook) => item?.authorEmail === user?.email
  );

  const filteredAndSortedBooks =
    matchBook
      ?.filter((book: TBook) => {
        const search = searchTerm.toLowerCase();

        const matchesSearch =
          book?.title?.toLowerCase().includes(search) ||
          book?.authorName?.toLowerCase().includes(search) ||
          book?.category?.toLowerCase().includes(search);

        // Optional: Add status filter if needed

        return matchesSearch;
      })
      ?.sort((a: TBook, b: TBook) => {
        if (priceSort === "low-to-high") {
          return parseFloat(a.price) - parseFloat(b.price);
        } else if (priceSort === "high-to-low") {
          return parseFloat(b.price) - parseFloat(a.price);
        }
        return 0;
      }) || [];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProduct = filteredAndSortedBooks.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredAndSortedBooks.length / itemsPerPage);

  const handleDeleteProduct = async (id: string) => {
    const bookInfo = {
      id: id,
    };
    try {
      const result = await deleteBook(bookInfo).unwrap();
      toast.success(result?.message, { duration: 2000 });
    } catch (error) {
      toast.error("Something Went Wrong..", { duration: 2000 });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]">
      <div className="container p-4 mx-auto sm:p-6 text-white">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            My Books
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Manage your book collection
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
               {/* Active Filters Display */}
              {(searchTerm ||  priceSort !== "none") && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-sm text-purple-300">Active filters:</span>
                  {searchTerm && (
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                      Search: "{searchTerm}"
                    </span>
                  )}
                 
                  {priceSort !== "none" && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                      Sort: {priceSort === "low-to-high" ? "Price ↑" : "Price ↓"}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setPriceSort("none")
                    }}
                    className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs hover:bg-red-500/30 transition-colors"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {paginatedProduct.map((item: TBook) => (
                  <tr
                    key={item._id}
                    className="hover:bg-white/5 transition-all duration-200 group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="relative w-16 h-16 overflow-hidden rounded-xl border-2 border-white/20 group-hover:border-purple-400/50 transition-colors duration-200">
                          <img
                            className="w-full h-full object-cover"
                            src={item?.imageUrl || "/placeholder.svg"}
                            alt={item?.title}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-200">
                        {item?.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {item?.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-green-400">
                        ৳ {item?.price}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-sm text-white mr-2">
                          {item?.numberOfBooks}
                        </span>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item?.numberOfBooks > 0
                              ? "bg-green-400"
                              : "bg-red-400"
                          }`}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <Link
                          to={`/admin/dashboard/update-product/${item._id}`}
                          className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:shadow-2xl transition duration-200 ease-in-out transform hover:scale-105"
                        >
                          Update
                        </Link>

                        <button
                          onClick={() => handleDeleteProduct(item?._id)}
                          className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-lg hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>

          {matchBook.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No books found</div>
              <p className="text-gray-500 text-sm mt-2">
                Start by adding your first book to the collection
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
