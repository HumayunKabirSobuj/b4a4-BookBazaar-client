import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (bookInfo) => ({
        url: "/order",
        method: "POST",
        body: bookInfo,
      }),
    }),
    getAdminOrdersData: builder.query({
      query: (userEmail) => ({
        url: "/payment/get-admin-order-data",
        method: "PUT",
        body: { email: userEmail }, // অবজেক্ট আকারে ইমেইল পাঠানো হচ্ছে
        headers: {
          "Content-Type": "application/json", // JSON ডেটা প্রেরণের জন্য সঠিক হেডার
        },
      }),
    }),
    getUserOrdersData: builder.query({
      query: (userEmail) => ({
        url: "/payment/get-user-order-data",
        method: "PUT",
        body: { email: userEmail }, // অবজেক্ট আকারে ইমেইল পাঠানো হচ্ছে
        headers: {
          "Content-Type": "application/json", // JSON ডেটা প্রেরণের জন্য সঠিক হেডার
        },
      }),
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetAdminOrdersDataQuery,
  useGetUserOrdersDataQuery,
} = orderApi;
