import { useState } from "react";
import { useGetAllBookDataQuery } from "../redux/features/productManagement/productApi";
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
  const [activeTab, setActiveTab] = useState("tab1");
  const { data, isLoading } = useGetAllBookDataQuery(undefined);
  // console.log(data);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <RingLoader size={80} color="#1ca944" />
      </div>
    );
  }
  return (
    <div>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4 mt-5">Explore All Books</h1>

        {/* tabs */}
        <div className="p-4">
          <div className="flex border-b border-gray-300">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "tab1"
                  ? "text-white bg-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              Tab 1
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "tab2"
                  ? "text-white bg-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Tab 2
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "tab3"
                  ? "text-white bg-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Tab 3
            </button>
          </div>
          <div className="mt-4">
            {activeTab === "tab1" && (
              <div className="p-4 bg-gray-100 rounded">Content for Tab 1</div>
            )}
            {activeTab === "tab2" && (
              <div className="p-4 bg-gray-100 rounded">Content for Tab 2</div>
            )}
            {activeTab === "tab3" && (
              <div className="p-4 bg-gray-100 rounded">Content for Tab 3</div>
            )}
          </div>
        </div>

        {/* cards */}
        <div className="grid lg:grid-cols-3 gap-5 px-5 md:grid-cols-2 grid-cols-1">
          {data?.data.map((item: TBook) => (
            <div
              key={item._id}
              className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] p-6 rounded-lg shadow-lg text-white "
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
                  className="px-4 py-2  text-sm font-medium transition text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
