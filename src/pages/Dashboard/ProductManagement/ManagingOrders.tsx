/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useState } from "react";
import { RingLoader } from "react-spinners";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import {
  useAcceptOrderMutation,
  useCencelOrderMutation,
  useDeleteOrderMutation,
  useGetAdminOrdersDataQuery,
} from "../../../redux/features/OrderManagement/orderApi";
import { useAppSelector } from "../../../redux/hooks";
import { TOrder } from "../../../types/TOrder";
import { toast } from "sonner";
import { X, Eye, Check, XCircle, Trash2 } from "lucide-react";
import { Pagination } from "../../../components/Shared/Pagination";
const itemsPerPage = 7;

const ManagingOrders = () => {
  const user = useAppSelector(useCurrentUser);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetAdminOrdersDataQuery(user?.email, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    pollingInterval: 2000,
  });
  const [acceptOrder] = useAcceptOrderMutation();
  const [cencelOrder] = useCencelOrderMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  // console.log(data);

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedReviews = orderData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(orderData.length / itemsPerPage);

  const handleAcceptOrder = async (id: string) => {
    const bookInfo = {
      id: id,
    };

    try {
      const result = await acceptOrder(bookInfo).unwrap();
      toast.success(result.message);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  const handleCencelOrder = async (id: string) => {
    const bookInfo = {
      id: id,
    };

    try {
      const result = await cencelOrder(bookInfo).unwrap();
      toast.success(result.message);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  const handleDeleteOrder = async (id: string) => {
    const orderInfo = {
      id: id,
    };

    try {
      const result = await deleteOrder(orderInfo).unwrap();
      toast.success(result.message);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses =
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium";

    switch (status.toLowerCase()) {
      case "pending":
        return `${baseClasses} bg-yellow-500/20 text-yellow-300 border border-yellow-500/30`;
      case "accepted":
        return `${baseClasses} bg-green-500/20 text-green-300 border border-green-500/30`;
      case "cancelled":
        return `${baseClasses} bg-red-500/20 text-red-300 border border-red-500/30`;
      default:
        return `${baseClasses} bg-gray-500/20 text-gray-300 border border-gray-500/30`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]">
      <div className="container p-4 mx-auto sm:p-6 text-white">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Order Management
          </h2>
          <p className="mt-2 text-gray-300">
            Manage and track all incoming orders
          </p>
        </div>

        <div className="overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Transaction
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Actions
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Buyer Info
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {paginatedReviews?.map((item: TOrder) => (
                  <tr
                    key={item._id}
                    className="hover:bg-white/5 transition-all duration-200 group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-16 h-16 overflow-hidden rounded-xl border-2 border-white/20 group-hover:border-purple-400/50 transition-colors duration-200">
                          <img
                            src={item?.product?.imageUrl || "/placeholder.svg"}
                            alt={item?.product?.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-200">
                            {item?.product?.title}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {item?.product?.category}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-green-400">
                        ৳ {item?.product?.price}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-white font-mono bg-white/10 px-2 py-1 rounded">
                        {item?.transactionId.slice(0, 10)}...
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={getStatusBadge(item?.orderStatus)}>
                        {item?.orderStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {item?.orderStatus === "pending" ? (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleAcceptOrder(item?._id)}
                            className="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                          >
                            <Check className="w-3 h-3 mr-1" />
                            Accept
                          </button>
                          <button
                            onClick={() => handleCencelOrder(item?._id)}
                            className="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-lg hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                          >
                            <XCircle className="w-3 h-3 mr-1" />
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span className="inline-flex items-center px-3 py-2 text-xs font-medium text-gray-400 bg-gray-600/20 rounded-lg border border-gray-600/30">
                            {item?.orderStatus}
                          </span>
                          <button
                            onClick={() => handleDeleteOrder(item?._id)}
                            disabled={item.orderStatus === "accepted"}
                            className={`inline-flex items-center px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 transform shadow-lg ${
                              item.orderStatus === "accepted"
                                ? "bg-gray-400 cursor-not-allowed text-white opacity-60"
                                : "text-white bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 hover:scale-105 hover:shadow-red-500/25"
                            }`}
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                        onClick={() => setSelectedBuyer(item)}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </button>
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

          {orderData?.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No orders found</div>
              <p className="text-gray-500 text-sm mt-2">
                Orders will appear here when customers make purchases
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedBuyer && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedBuyer(null)}
          ></div>
          <div className="relative bg-gradient-to-br from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white rounded-2xl w-full max-w-md p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Buyer Details
              </h3>
              <button
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                onClick={() => setSelectedBuyer(null)}
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <label className="text-sm text-purple-300 font-medium">
                  Customer Name
                </label>
                <p className="text-white mt-1 font-medium">
                  {selectedBuyer?.userInfo.name}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <label className="text-sm text-purple-300 font-medium">
                  Email Address
                </label>
                <p className="text-white mt-1 font-mono text-sm">
                  {selectedBuyer?.userInfo.email}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <label className="text-sm text-purple-300 font-medium">
                  Transaction ID
                </label>
                <p className="text-white mt-1 font-mono text-sm break-all">
                  {selectedBuyer?.transactionId}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <label className="text-sm text-purple-300 font-medium">
                  Order Status
                </label>
                <div className="mt-2">
                  <span className={getStatusBadge(selectedBuyer?.orderStatus)}>
                    {selectedBuyer?.orderStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedBuyer(null)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagingOrders;
