
import { useState } from "react";
import { useGetAllBookDataQuery } from "../../../redux/features/productManagement/productApi";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

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

const AllProducts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useGetAllBookDataQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <RingLoader size={80} color="#1ca944" />
      </div>
    );
  }

  const filterBooks = (books: TBook[] | undefined) => {
    return books?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredAllBooks = filterBooks(data?.data);
  const filteredFictionBooks = filterBooks(
    data?.data?.filter((item: TBook) => item.category === "fiction")
  );
  const filteredEducationBooks = filterBooks(
    data?.data?.filter((item: TBook) => item.category === "academic")
  );
  const filteredChildrenBooks = filterBooks(
    data?.data?.filter((item: TBook) => item.category === "children")
  );

  return (
    <div>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4 mt-5">Explore All Books</h1>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search ..."
            className="p-2 rounded border border-gray-300 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tabs */}
        <div className="p-4">
          <div className="flex border-b border-gray-300">
            {[
              { label: "All", value: "all" },
              { label: "Fiction", value: "fiction" },
              { label: "Education", value: "education" },
              { label: "Children", value: "children" },
            ].map((tab) => (
              <button
                key={tab.value}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab.value
                    ? "text-white bg-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-4">
            {(activeTab === "all" && filteredAllBooks) ||
            (activeTab === "fiction" && filteredFictionBooks) ||
            (activeTab === "education" && filteredEducationBooks) ||
            (activeTab === "children" && filteredChildrenBooks) ? (
              <div className="p-4 rounded">
                <div className="grid lg:grid-cols-3 gap-5 px-5 md:grid-cols-2 grid-cols-1">
                  {(activeTab === "all" && filteredAllBooks) ||
                  (activeTab === "fiction" && filteredFictionBooks) ||
                  (activeTab === "education" && filteredEducationBooks) ||
                  (activeTab === "children" && filteredChildrenBooks)
                    ? (activeTab === "all"
                        ? filteredAllBooks
                        : activeTab === "fiction"
                        ? filteredFictionBooks
                        : activeTab === "education"
                        ? filteredEducationBooks
                        : filteredChildrenBooks
                      )?.map((item: TBook) => (
                        <div
                          key={item._id}
                          className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] p-6 rounded-lg shadow-lg text-white"
                        >
                          <div className="flex items-center justify-center mb-4">
                            <img
                              src={item?.imageUrl}
                              alt="Book Cover"
                              className="w-44 h-40 object-cover rounded-md shadow-md"
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
                    : null}
                </div>
              </div>
            ) : (
              <p className="text-gray-300">No books found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
