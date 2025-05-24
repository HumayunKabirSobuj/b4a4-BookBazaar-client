/* eslint-disable @typescript-eslint/no-unused-vars */
// import { RingLoader } from "react-spinners";
// import {
//   useActiveAccountMutation,
//   useChangeRoleMutation,
//   useDeactivateAccountMutation,
//   useGetAllUserDataQuery,
// } from "../../redux/features/auth/authApi";
// import { toast } from "sonner";

// type TUser = {
//   createdAt: string; // ISO date string
//   email: string;
//   isBlocked: boolean;
//   name: string;
//   role: string;
//   updatedAt: string; // ISO date string
//   __v: number;
//   _id: string; // ObjectId as a string
// };
// const DeactivatingAccounts = () => {
//   const { data, isLoading } = useGetAllUserDataQuery(undefined, {
//     pollingInterval: 2000,
//     refetchOnMountOrArgChange: true,
//     refetchOnFocus: true,
//     refetchOnReconnect: true,
//   });
//   const [deactivateAccount] = useDeactivateAccountMutation();
//   const [activeAccount] = useActiveAccountMutation();
//   const [changeRole] = useChangeRoleMutation();
//   // console.log(data?.data);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
//         <RingLoader size={80} color="#1ca944" />
//       </div>
//     );
//   }

//   const usersData = data?.data;
//   // console.log(usersData);

//   const handleDeactive = async (id: string) => {
//     try {
//       // console.log(id);

//       const userInfo = {
//         id: id,
//       };

//       // console.log(userInfo);

//       const result = await deactivateAccount(userInfo).unwrap(); // unwrap to get the actual response data
//       // console.log(result);
//       // handle the success response

//       toast.success(result.message, { duration: 2000 });
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (err) {
//       // console.error("Error deactivating account:", err);
//     }
//   };
//   const handleActive = async (id: string) => {
//     try {
//       // console.log(id);

//       const userInfo = {
//         id: id,
//       };

//       // console.log(userInfo);

//       const result = await activeAccount(userInfo).unwrap(); // unwrap to get the actual response data
//       // console.log(result);
//       // handle the success response

//       toast.success(result.message, { duration: 2000 });
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (err) {
//       // console.error("Error deactivating account:", err);
//     }
//   };

//   const handleRoleChange = async (
//     selectedRole: string,
//     selectedUserEmail: string
//   ) => {
//     // console.log("Selected Role:", selectedRole);

//     try {
//       const userRole = {
//         role: selectedRole,
//         email: selectedUserEmail,
//       };
//       const result = await changeRole(userRole).unwrap();
//       toast.success(result.message, { duration: 2000 });
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (error) {
//       toast.error("Something went wrong", { duration: 2000 });
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white p-6 min-h-screen">
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto">
//           {/* head */}
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left">Name</th>
//               <th className="px-6 py-3 text-left">Email</th>
//               <th className="px-6 py-3 text-left">Role</th>
//               <th className="px-6 py-3 text-left">Change Role</th>
//               <th className="px-6 py-3 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             {usersData?.map((item: TUser, idx: number) => (
//               <tr key={idx} className="border-b">
//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-3">
//                     <div>
//                       <div className="font-bold">{item.name}</div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="font-bold">{item.email}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="font-bold">{item.role}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <select
//                     onChange={(e) =>
//                       handleRoleChange(e.target.value, item.email)
//                     }
//                     defaultValue={""}
//                     className="border rounded-lg px-2 py-1 focus:outline-none"
//                   >
//                     <option value="" disabled className="bg-[#1C1C32]">
//                       Select Role
//                     </option>

//                     <option
//                       value={"user"}
//                       disabled={item.role === "user"}
//                       className=" bg-[#1C1C32]"
//                     >
//                       User
//                     </option>
//                     <option
//                       value={"admin"}
//                       disabled={item.role === "admin"}
//                       className="bg-[#1C1C32]"
//                     >
//                       Admin
//                     </option>
//                   </select>
//                 </td>
//                 <td className="px-6 py-4">
//                   {" "}
//                   {item?.isBlocked === false && (
//                     <button
//                       onClick={() => {
//                         handleDeactive(item._id);
//                       }}
//                       className="text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none px-2 py-1 w-[100px]"
//                     >
//                       Deactivate
//                     </button>
//                   )}
//                   {item?.isBlocked === true && (
//                     <button
//                       onClick={() => {
//                         handleActive(item._id);
//                       }}
//                       className="text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-purple-500 focus:outline-none px-2 py-1 w-[100px]"
//                     >
//                       Make Active
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           {/* foot */}
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DeactivatingAccounts;

"use client";

import { RingLoader } from "react-spinners";
import {
  useActiveAccountMutation,
  useChangeRoleMutation,
  useDeactivateAccountMutation,
  useGetAllUserDataQuery,
} from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import {
  UserCheck,
  UserX,
  Shield,
  User,
  Mail,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Pagination } from "../../components/Shared/Pagination";

type TUser = {
  createdAt: string;
  email: string;
  imageUrl: string;
  isBlocked: boolean;
  name: string;
  role: string;
  updatedAt: string;
  __v: number;
  _id: string;
};
const itemsPerPage = 7;

const ManageUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useGetAllUserDataQuery(undefined, {
    pollingInterval: 2000,
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const [deactivateAccount] = useDeactivateAccountMutation();
  const [activeAccount] = useActiveAccountMutation();
  const [changeRole] = useChangeRoleMutation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <RingLoader size={80} color="#1ca944" />
      </div>
    );
  }

  const usersData = data?.data;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = usersData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(usersData.length / itemsPerPage);

  const handleDeactive = async (id: string) => {
    try {
      const userInfo = {
        id: id,
      };

      const result = await deactivateAccount(userInfo).unwrap();
      toast.success(result.message, { duration: 2000 });
    } catch (err) {
      toast.error("Failed to deactivate account", { duration: 2000 });
    }
  };

  const handleActive = async (id: string) => {
    try {
      const userInfo = {
        id: id,
      };

      const result = await activeAccount(userInfo).unwrap();
      toast.success(result.message, { duration: 2000 });
    } catch (err) {
      toast.error("Failed to activate account", { duration: 2000 });
    }
  };

  const handleRoleChange = async (
    selectedRole: string,
    selectedUserEmail: string
  ) => {
    try {
      const userRole = {
        role: selectedRole,
        email: selectedUserEmail,
      };
      const result = await changeRole(userRole).unwrap();
      toast.success(result.message, { duration: 2000 });
    } catch (error) {
      toast.error("Something went wrong", { duration: 2000 });
    }
  };

  const getRoleBadge = (role: string) => {
    const baseClasses =
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium";

    switch (role.toLowerCase()) {
      case "admin":
        return `${baseClasses} bg-purple-500/20 text-purple-300 border border-purple-500/30`;
      case "user":
        return `${baseClasses} bg-blue-500/20 text-blue-300 border border-blue-500/30`;
      default:
        return `${baseClasses} bg-gray-500/20 text-gray-300 border border-gray-500/30`;
    }
  };

  const getStatusBadge = (isBlocked: boolean) => {
    const baseClasses =
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium";

    if (isBlocked) {
      return `${baseClasses} bg-red-500/20 text-red-300 border border-red-500/30`;
    } else {
      return `${baseClasses} bg-green-500/20 text-green-300 border border-green-500/30`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]">
      <div className="container p-4 mx-auto sm:p-6 text-white">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold leading-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            User Management
          </h2>
          <p className="mt-2 text-gray-300">
            Manage user accounts, roles, and permissions
          </p>
        </div>

        <div className="overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {usersData?.length || 0}
                  </div>
                  <div className="text-sm text-gray-400">Total Users</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {usersData?.filter((user: TUser) => !user.isBlocked)
                      .length || 0}
                  </div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {usersData?.filter((user: TUser) => user.role === "admin")
                      .length || 0}
                  </div>
                  <div className="text-sm text-gray-400">Administrators</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>User</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4" />
                      <span>Role</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Change Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {paginatedUsers?.map((item: TUser, idx: number) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/5 transition-all duration-200 group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          {/* <User className="w-5 h-5 text-white" /> */}
                          <img
                            src={item.imageUrl}
                            alt="profile"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors duration-200">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-300 font-mono">
                        {item.email}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={getRoleBadge(item.role)}>
                        {item.role === "admin" && (
                          <Shield className="w-3 h-3 mr-1" />
                        )}
                        {item.role === "user" && (
                          <User className="w-3 h-3 mr-1" />
                        )}
                        {item.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={getStatusBadge(item.isBlocked)}>
                        {item.isBlocked ? (
                          <>
                            <UserX className="w-3 h-3 mr-1" />
                            Blocked
                          </>
                        ) : (
                          <>
                            <UserCheck className="w-3 h-3 mr-1" />
                            Active
                          </>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="relative">
                        <select
                          onChange={(e) =>
                            handleRoleChange(e.target.value, item.email)
                          }
                          defaultValue=""
                          className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-2 pr-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:bg-white/15 transition-colors duration-200 cursor-pointer"
                        >
                          <option
                            value=""
                            disabled
                            className="bg-[#1C1C32] text-gray-300"
                          >
                            Select Role
                          </option>
                          <option
                            value="user"
                            disabled={item.role === "user"}
                            className="bg-[#1C1C32] text-white"
                          >
                            User
                          </option>
                          <option
                            value="admin"
                            disabled={item.role === "admin"}
                            className="bg-[#1C1C32] text-white"
                          >
                            Admin
                          </option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {!item.isBlocked ? (
                        <button
                          onClick={() => handleDeactive(item._id)}
                          className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-lg hover:from-red-600 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                        >
                          <UserX className="w-3 h-3 mr-1" />
                          Deactivate
                        </button>
                      ) : (
                        <button
                          onClick={() => handleActive(item._id)}
                          className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                        >
                          <UserCheck className="w-3 h-3 mr-1" />
                          Activate
                        </button>
                      )}
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

          {usersData?.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No users found</div>
              <p className="text-gray-500 text-sm mt-2">
                User accounts will appear here when they register
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
