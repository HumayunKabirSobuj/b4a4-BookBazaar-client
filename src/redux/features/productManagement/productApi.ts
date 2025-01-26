import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (bookInfo) => ({
        url: "/api/product/add-product",
        method: "POST",
        body: bookInfo,
      }),
    }),
  }),
});

export const { useAddBookMutation } = productApi;
