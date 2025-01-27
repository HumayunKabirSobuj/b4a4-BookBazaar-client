import { RingLoader } from "react-spinners";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { useGetAdminOrdersDataQuery } from "../../../redux/features/OrderManagement/orderApi";
import { useAppSelector } from "../../../redux/hooks";
import { TOrder } from "../../../types/TOrder";

const ManagingOrders = () => {
  const user = useAppSelector(useCurrentUser); // বর্তমান ইউজারের ডেটা সিলেক্ট করা হচ্ছে

  // API কলে userEmailData পাঠানো
  const { data, isLoading } = useGetAdminOrdersDataQuery(user?.email);

  // console.log(data?.data);

  // const {product} = data?.data;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <RingLoader size={80} color="#1ca944" />
      </div>
    );
  }

  const orderData = data?.data;
  // console.log(orderData);
  // orderData?.map(item=>console.log(item))

  return (
    <div className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white p-6 min-h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-2">
          {/* head */}
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Image</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">transactionId</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orderData?.map((item: TOrder) => (
              <tr key={item._id} className="border-b">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full h-12 w-12 overflow-hidden">
                      <img
                        src={item?.product?.imageUrl}
                        alt="Avatar"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-bold">
                      {item?.product?.title.slice(0, 20)}...
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-bold">
                     ৳ {item?.product?.price}...
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-bold">
                     ৳ {item?.product?.category}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="font-bold">
                     {item?.transactionId.slice(0,10)}...
                    </div>
                  </div>
                </td>
               
                <td className="px-6 py-4">
                  <button className="bg-transparent text-blue-500 text-xs border border-blue-500 py-1 px-3 rounded-full">
                    Buyer Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManagingOrders;
