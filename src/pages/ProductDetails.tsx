/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetAllBookDataQuery } from "../redux/features/productManagement/productApi";
import { ScaleLoader } from "react-spinners";
import { useAppSelector } from "../redux/hooks";
import { useCurrentUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useAddOrderMutation } from "../redux/features/OrderManagement/orderApi";
import { addToCart } from "../redux/features/Cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
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
const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetAllBookDataQuery(undefined);
  const [addOrder] = useAddOrderMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   console.log(id);

  //   console.log(data.data);
  const bookData = data?.data?.find((item: TBook) => item._id === id);

  const user = useAppSelector(useCurrentUser);

  const cartItem: TBook[] = useSelector((state: any) => state.cart.products); // or with type if you have RootState
  const currentQuantityInCart = cartItem.filter(
    (item) => item._id === bookData?._id
  ).length;
  const isOutOfStock =
    bookData?.numberOfBooks !== 0 &&
    currentQuantityInCart >= bookData?.numberOfBooks;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <ScaleLoader color="#1ca944" />
      </div>
    );
  }

  const handleProceedToBuy = async (id: string) => {
    if (!user) {
      toast.error("You want to login first..");
      return navigate("/login");
    }

    if (bookData.numberOfBooks < 1) {
      return toast.error("Insufficient stock", { duration: 2000 });
    }

    // console.log(id);
    if (user?.email === bookData?.authorEmail) {
      return toast.error("You cannot buy your own product");
    }

    const productInfo = {
      productId: id,
      userInfo: {
        ...user,
      },
    };

    const result = await addOrder(productInfo).unwrap();

    window.location.replace(result.url);
  };
  return (
    <div className="container mx-auto">
      <div className="min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white p-6">
        {/* Book Details Container */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 mt-20">
          {/* Book Cover */}
          <div className="w-full md:w-1/3">
            <img
              src={bookData?.imageUrl}
              alt="Book Cover"
              className="w-full h-[300px] rounded-lg shadow-lg "
            />
          </div>

          {/* Book Information */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{bookData?.title}</h1>
            <h2 className="text-lg text-blue-400 mb-2">
              By {bookData?.authorName}
            </h2>
            <p className="text-gray-300 mb-2">{bookData?.description}</p>
            <p className="text-gray-400 mb-2">
              <span className="font-semibold">Category : </span>{" "}
              {bookData?.category}
            </p>
            <p className="text-gray-400 mb-6">
              <span className="font-semibold">Number Of Books : </span>{" "}
              {bookData?.numberOfBooks}
            </p>

            {user && user.email !== bookData.authorEmail && (
              <button
                onClick={() => dispatch(addToCart(bookData))}
                disabled={isOutOfStock}
                className={`px-4 py-2 text-sm font-medium transition rounded-lg focus:outline-none
    ${
      isOutOfStock
        ? "bg-gray-400 cursor-not-allowed"
        : "text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500"
    }
  `}
              >
                {isOutOfStock ? "Out of Stock" : "Add To Cart"}
              </button>
            )}
            {user && user.email === bookData.authorEmail && (
              <button
                className={`px-4 py-2 text-sm font-medium transition rounded-lg focus:outline-none text-white bg-gray-400 cursor-not-allowed`}
              >
                You can't add your own product
              </button>
            )}
            {!user && (
              <button
                className={`px-4 py-2 text-sm font-medium transition rounded-lg focus:outline-none text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500`}
              >
                <Link to={"/login"}>Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
