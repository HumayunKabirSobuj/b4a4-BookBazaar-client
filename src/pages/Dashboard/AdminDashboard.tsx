import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetAdminOrdersDataQuery } from "../../redux/features/OrderManagement/orderApi";
import { ScaleLoader } from "react-spinners";
import { TOrder } from "../../types/TOrder";
import { useGetAllUserDataQuery } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import { Pagination } from "../../components/Shared/Pagination";
const itemsPerPage = 7;

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/");
  };
  const user = useAppSelector(useCurrentUser);
  //   console.log(user);
  const { data: usersData } = useGetAllUserDataQuery(undefined, {
    // pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  //   console.log(usersData);

  const { data, isLoading } = useGetAdminOrdersDataQuery(user?.email, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    // pollingInterval: 30000,
  });

  //   console.log(data);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <ScaleLoader color="#1ca944" />
      </div>
    );
  }

  const orderData = data?.data;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = orderData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // console.log(paginatedOrders);
  const totalPages = Math.ceil(orderData.length / itemsPerPage);
  //   console.log(orderData);
  const priceData = orderData?.map((item: TOrder) =>
    Number(item.product.price)
  );
  //   console.log(priceData);
  const totalPrice =
    priceData?.reduce((sum: number, price: number) => sum + price, 0) || 0;
  //   console.log(totalPrice);

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = monthNames[date.getMonth()]; // 0-11 → index অনুযায়ী
  const currentYear = date.getFullYear();

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* বাম দিক - এডমিন ইনফরমেশন */}
            <motion.aside
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-1 bg-[#2B1E36] p-6 rounded-lg shadow-lg min-h-screen"
            >
              <div className="text-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={user?.imageUrl}
                  alt="Admin"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-400"
                />
                <h2 className="text-xl font-bold mb-2">{user?.name}</h2>
                <p className="text-sm text-gray-400">{user?.email}</p>
                <p className="text-sm text-gray-400">Role : {user?.role}</p>
              </div>

              <div className="my-10 flex flex-col items-center justify-center gap-5">
                <Link
                  to="/"
                  className="w-[150px] text-center px-12 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none"
                >
                  <span className="text-white">Home</span>
                </Link>
                <button
                  onClick={() => handleLogout()}
                  className="w-[150px] text-center px-12 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none"
                >
                  <span className="text-white">Logout</span>
                </button>
              </div>
            </motion.aside>

            {/* ডান দিক - বিক্রয় তথ্য */}
            <motion.main
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:col-span-3 bg-[#2B1E36] p-6 rounded-lg shadow-lg min-h-screen"
            >
              <h1 className="text-2xl font-bold mb-6">Sales summary</h1>

              {/* স্ট্যাটস কার্ড গ্রিড */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#3A2E42] p-4 rounded-lg"
                >
                  <h3 className="text-gray-400">Total Sell</h3>
                  <p className="text-2xl font-bold">৳ {totalPrice}</p>
                  <div className="h-1 bg-purple-500 mt-2 rounded-full w-3/4" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#3A2E42] p-4 rounded-lg"
                >
                  <h3 className="text-gray-400">Active Order</h3>
                  <p className="text-2xl font-bold">{orderData.length}</p>
                  <div className="h-1 bg-green-500 mt-2 rounded-full w-1/2" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#3A2E42] p-4 rounded-lg"
                >
                  <h3 className="text-gray-400">New Users</h3>
                  <p className="text-2xl font-bold">
                    {usersData?.data?.length - 1}
                  </p>
                  <div className="h-1 bg-blue-500 mt-2 rounded-full w-1/3" />
                </motion.div>
              </div>

              {/* বিক্রয় চার্ট */}

              <div className="rounded-xl border  p-6 shadow-sm lg:my-10 my-5">
                {/* Header */}
                <div className="mb-4">
                
                  <p className="text-sm text-white">January - {currentMonth} {currentYear}</p>
                </div>

                {/* Chart */}
                <div className="w-full h-64 ">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid vertical={false} stroke="#e5e7eb" />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                        stroke="#9ca3af"
                      />
                      {/* <Tooltip
                        contentStyle={{
                          backgroundColor: "#fff",
                          border: "1px solid #e5e7eb",
                          borderRadius: 6,
                        }}
                        itemStyle={{ color: "#374151" }}
                        labelStyle={{ color: "#6b7280", marginBottom: 4 }}
                        cursor={{ fill: "#f3f4f6" }}
                      /> */}
                      <Bar
                        dataKey="desktop"
                        fill="#4f46e5"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="mobile"
                        fill="#06b6d4"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                
              </div>

              {/* সাম্প্রতিক অর্ডার টেবিল */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#3A2E42]">
                    <tr>
                      <th className="p-3 text-left">transactionId</th>
                      <th className="p-3 text-left">Buyer</th>
                      <th className="p-3 text-left">Price</th>
                      <th className="p-3 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedOrders?.map((item: TOrder) => (
                      <tr key={item._id}>
                        <td className="p-3">{item.transactionId}</td>
                        <td className="p-3">{item?.userInfo.name}</td>
                        <td className="p-3">৳ {item?.product.price}</td>
                        <td className="p-3">
                          <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                            Paid
                          </span>
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
            </motion.main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
