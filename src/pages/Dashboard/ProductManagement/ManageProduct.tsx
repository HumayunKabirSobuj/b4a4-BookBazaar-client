import { RingLoader } from "react-spinners";
import { useGetAllBookDataQuery } from "../../../redux/features/productManagement/productApi";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

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
const ManageProduct = () => {
  const { data, isLoading } = useGetAllBookDataQuery(undefined);
  const user = useAppSelector(useCurrentUser);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] px-4">
        <RingLoader size={80} color="#1ca944" />
      </div>
    );
  }

  const allBooksData = data?.data;
  // console.log(allBooksData);

  const matchBook = allBooksData.filter(
    (item: TBook) => item?.authorEmail === user?.email
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31]">
      <div className="container p-2 mx-auto sm:p-4  text-white">
        <h2 className="mb-8 text-4xl font-semibold leading-tight text-center">
          My Books
        </h2>
        <div className="">
          <div className="">
            <table className="min-w-full  h-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="">
                <tr className="text-left">
                  <th className="p-3 text-base">Image</th>
                  <th className="p-3 text-base">Title</th>
                  <th className="p-3 text-base">category</th>
                  <th className="p-3 text-base">price</th>
                  <th className="p-3 text-base">Number Of Books</th>
                  <th className="p-3 text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {matchBook.map((item: TBook) => (
                  <tr key={item._id} className="border-b border-opacity-20 ">
                    <td className="p-3">
                      <div className="flex items-center justify-start">
                        <div className="w-14 h-14  overflow-hidden ">
                          <img
                            className="w-full h-full object-cover rounded-full"
                            src={item?.imageUrl}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <p>{item?.title}</p>
                    </td>
                    <td className="p-3">
                      <p>{item?.category}</p>
                    </td>
                    <td className="p-3">
                      <p>৳ {item?.price}</p>
                    </td>
                    <td className="p-3 ">
                      <p>{item?.numberOfBooks}</p>
                    </td>
                    <td className="p-3 relative">
                      <button
                        onClick={() => toggleDropdown(item._id)}
                        className="relative text-2xl"
                      >
                        <BsThreeDotsVertical />
                      </button>
                      {dropdownOpen === item._id && (
                        <div className="absolute right-0 mt-2 w-48 bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white z-10 border border-gray-200 rounded-lg shadow-lg ">
                          <ul className="py-1 space-y-2">
                            {user && (
                              <li>
                                <button className="text-center py-2 bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white z-10 border border-gray-200 rounded-lg shadow-lg w-full">
                                  Delete
                                </button>
                              </li>
                            )}
                            <li>
                              <li>
                                <button className="text-center py-2 bg-gradient-to-b from-[#1B1B31] via-[#2B1E36] to-[#1B1B31] text-white z-10 border border-gray-200 rounded-lg shadow-lg w-full">
                                  Update
                                </button>
                              </li>
                            </li>
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
