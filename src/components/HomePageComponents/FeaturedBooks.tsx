import { Link } from "react-router-dom";
import { useGetAllBookDataQuery } from "../../redux/features/productManagement/productApi";
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
const FeaturedBooks = () => {
  const { data, isLoading } = useGetAllBookDataQuery(undefined);
  // console.log(data);
  const booksData = data?.data;
  //   console.log(booksData);
  const sliceBooks = booksData?.slice(0, 6);
  //   console.log(sliceBooks);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <RingLoader size={80} color="#1ca944" />
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]">
      <div className="grid lg:grid-cols-3 gap-5 px-5 md:grid-cols-2 grid-cols-1">
        {sliceBooks?.length ? (
          sliceBooks.map((item: TBook) => (
            <div
              key={item._id}
              className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] p-6 rounded-lg shadow-lg text-white"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={item?.imageUrl}
                  alt="Book Cover"
                  className="w-44 h-40 rounded-md shadow-md"
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
      <div className="lg:mb-8 mt-12 my-10 text-center">
        <Link to={'/all-product'} className="px-10 py-2 text-xl font-medium transition text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none">
          View All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBooks;
