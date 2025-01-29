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
  const { data, isLoading } = useGetAllBookDataQuery(undefined);
  // console.log(data);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <RingLoader size={80} color="#1ca944" />
      </div>
    );
  }

  const fictonBookData = data?.data?.filter(
    (item: TBook) => item.category === "fiction"
  );
  const educationBookData = data?.data?.filter(
    (item: TBook) => item.category === "academic"
  );
  const childrenBookData = data?.data?.filter(
    (item: TBook) => item.category === "children"
  );
  return (
    <div>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4 mt-5">Explore All Books</h1>

        {/* tabs */}
        <div className="p-4">
          <div className="flex border-b border-gray-300">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "all"
                  ? "text-white bg-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "fiction"
                  ? "text-white bg-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("fiction")}
            >
              Fiction
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "education"
                  ? "text-white bg-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "children"
                  ? "text-white bg-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("children")}
            >
              Children
            </button>
          </div>
          <div className="mt-4">
            {activeTab === "all" && (
              <div className="p-4  rounded">
                {/*All Books cards */}
                <div className="grid lg:grid-cols-3 gap-5 px-5 md:grid-cols-2 grid-cols-1">
                  {data?.data?.map((item: TBook) => (
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
            )}
            {activeTab === "fiction" && (
              <div className="p-4  rounded">
                {/*Fiction Books cards */}
                <div className="grid lg:grid-cols-3 gap-5 px-5 md:grid-cols-2 grid-cols-1">
                  {fictonBookData?.map((item: TBook) => (
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
            )}
            {activeTab === "education" && (
              <div className="p-4 rounded">
                {/*Education Books cards */}
                <div className="grid lg:grid-cols-3 gap-5 px-5 md:grid-cols-2 grid-cols-1">
                  {educationBookData?.map((item: TBook) => (
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
            )}
            {activeTab === "children" && (
              <div className="p-4 rounded">
                {" "}
                {/*Children Books cards */}
                <div className="grid lg:grid-cols-3 gap-5 px-5 md:grid-cols-2 grid-cols-1">
                  {childrenBookData?.map((item: TBook) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
