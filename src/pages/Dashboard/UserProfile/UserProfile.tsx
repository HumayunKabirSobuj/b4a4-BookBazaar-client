import { User } from "lucide-react";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";

export default function UserProfile() {
  const user = useAppSelector(useCurrentUser);

//   console.log({ user });
  return (
    <div className="bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]  w-full min-h-screen pl-4 pr-4 py-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            User Account
          </h1>
          <p className="text-purple-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Based on the description of BookBazaar and the image provided,
            here is a 4-step process that BookBazaar uses to scale a
            customer's business
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="relative">
                <img
                  src={user?.imageUrl}
                  alt="Albert Flores"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white/20"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {user?.name}
                </h2>
                <p className="text-purple-200 text-sm md:text-base">
                  {user?.email}
                </p>
              </div>
            </div>
           
          </div>
        </div>

        {/* Information Cards */}
       <div className="flex items-center justify-center ">
         <div className="w-full">
          {/* Information Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="bg-purple-600/30 p-3 rounded-full mb-3">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Information</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 text-sm mb-1">
                  Username
                </label>
                <div className="text-white text-sm bg-white/5 p-2 rounded-lg">
                  {"@" + user?.email.split("@")[0]}
                </div>
              </div>
              <div>
                <label className="block text-purple-200 text-sm mb-1">
                  Role
                </label>
                <div className="text-white text-sm bg-white/5 p-2 rounded-lg">
                  {user?.role}
                </div>
              </div>
             
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}
