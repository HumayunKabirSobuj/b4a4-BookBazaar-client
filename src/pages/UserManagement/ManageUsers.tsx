/* eslint-disable @typescript-eslint/no-unused-vars */

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
  Filter,
  Search,
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
  const [roleFilter, setRoleFilter] = useState("all");
  // console.log(roleFilter);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

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

  const filteredAndSortedUsers =
    usersData?.filter((user: TUser) => {
      // Search filter
      const search = searchTerm.toLowerCase();
      const matchesSearch =
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search);

      // Status filter (assuming isBlocked is boolean and statusFilter is "all" | "blocked" | "unblocked")
      let matchesStatus = true;
      if (roleFilter === "admin") {
        matchesStatus = user.role === "admin";
      } else if (roleFilter === "user") {
        matchesStatus = user.role === "user";
      }

      return matchesSearch && matchesStatus;
    }) || [];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredAndSortedUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredAndSortedUsers.length / itemsPerPage);

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

          {/* Search and Filter Section */}
          <div className="mb-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition-all duration-200"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Status Filter */}
                  <div>
                    <label className="block text-sm font-medium text-purple-300 mb-2">
                      Filter by Role
                    </label>
                    <select
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="all" className="bg-gray-800">
                        All User
                      </option>
                      <option value="admin" className="bg-gray-800">
                        Admin
                      </option>
                      <option value="user" className="bg-gray-800">
                        User
                      </option>
                    </select>
                  </div>

                  {/* Price Sort */}
                </div>

                {/* Active Filters Display */}
                {/* Active Filters Display */}
                {(searchTerm || roleFilter !== "all") && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-sm text-purple-300">
                      Active filters:
                    </span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                      {roleFilter === "user" ? "User ↑" : "Admin ↑"}
                    </span>
                    {searchTerm && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                        Search: "{searchTerm}"
                      </span>
                    )}

                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setRoleFilter("all");
                      }}
                      className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs hover:bg-red-500/30 transition-colors"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </div>
            )}
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
                            className="bg-[#1C1C32] text-gray-300 "
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
