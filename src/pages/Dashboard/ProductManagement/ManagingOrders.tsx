import  { useState } from "react";
import { RingLoader } from "react-spinners";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { useGetAdminOrdersDataQuery } from "../../../redux/features/OrderManagement/orderApi";
import { useAppSelector } from "../../../redux/hooks";
import { TOrder } from "../../../types/TOrder";

const ManagingOrders = () => {
  const user = useAppSelector(useCurrentUser); // বর্তমান ইউজারের ডেটা সিলেক্ট করা হচ্ছে

  // API কলে userEmailData পাঠানো
  const { data, isLoading } = useGetAdminOrdersDataQuery(user?.email,{
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    pollingInterval: 30000,
  });

  // Modal state
  const [selectedBuyer, setSelectedBuyer] = useState<TOrder | null>(null);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <RingLoader size={80} color="#1ca944" />
      </div>
    );
  }

  const orderData = data?.data;

  return (
    <div className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white p-6 min-h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto ">
          {/* Table Head */}
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Image</th>
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Transaction ID</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* Table Rows */}
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
                <td className="px-6 py-4">{item?.product?.title}</td>
                <td className="px-6 py-4">৳ {item?.product?.price}</td>
                <td className="px-6 py-4">{item?.product?.category}</td>
                <td className="px-6 py-4">{item?.transactionId.slice(0, 10)}...</td>
                <td className="px-6 py-4">
                  <button
                    className="text-white bg-gradient-to-r from-purple-500 to-blue-500  hover:from-blue-500 hover:to-purple-500 focus:outline-none  text-xs py-1 px-3 rounded-full hover:bg-blue-600"
                    onClick={() => setSelectedBuyer(item)} // মোডাল ওপেন
                  >
                    Buyer Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedBuyer && (
        <div className="fixed inset-0 flex items-center justify-center  z-50">
          <div className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white rounded-lg w-96 p-6 relative">
            <h3 className="font-bold text-lg mb-4">Buyer Details</h3>
            <p className="py-2">
              <strong>Name:</strong> {selectedBuyer?.userInfo.name}
            </p>
            <p className="py-2">
              <strong>Email:</strong>  {selectedBuyer?.userInfo.email}
            </p>
            <p className="py-2">
              <strong>Transaction ID:</strong> {selectedBuyer?.transactionId}
            </p>
            <div className="absolute top-3 right-3">
              <button
                className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600"
                onClick={() => setSelectedBuyer(null)} // মোডাল বন্ধ
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagingOrders;
