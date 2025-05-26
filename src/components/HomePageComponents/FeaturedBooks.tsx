import { Link } from "react-router-dom";
import { useGetAllBookDataQuery } from "../../redux/features/productManagement/productApi";
import { ScaleLoader } from "react-spinners";
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
  const availlableBooks = booksData?.filter(
    (book: TBook) => book.numberOfBooks > 0
  );

  //   console.log(booksData);
  const sliceBooks = availlableBooks?.slice(0, 8);
  //   console.log(sliceBooks);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <ScaleLoader color="#1ca944" />
      </div>
    );
  }

  return (
    <div className="lg:py-10 py-5 bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] rounded-3xl">
      <div className="grid lg:grid-cols-4  gap-5 px-5 md:grid-cols-2 grid-cols-1">
        {sliceBooks?.length ? (
          sliceBooks.map((item: TBook) => (
            <div
              key={item._id}
              className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] rounded-lg shadow-lg text-white my-2"
            >
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="relative flex items-center justify-center mb-4">
                    <img
                      src={item?.imageUrl}
                      alt="Book Cover"
                      className="w-full h-48 rounded-md shadow-md"
                    />
                    <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded shadow-md">
                      ট {item?.price}
                    </span>
                  </div>
                  <div className="px-2">
                    <h3 className="text-xl font-semibold mb-2">
                      {item?.title.slice(0, 30)} ...
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {item.description.slice(0, 200)} ...
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-full px-4 pb-4">
                    <Link
                      to={`/product-details/${item._id}`}
                      className="w-full block text-center px-4 py-2 text-sm font-medium transition text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none "
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-300">No books found.</p>
        )}
      </div>
      <div className="my-8 text-center">
        <Link
          to={"/all-product"}
          className="px-10 py-2 text-xl font-medium transition text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBooks;
