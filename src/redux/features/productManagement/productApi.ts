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
    getAllBookData: builder.query({
      query: () => ({
        url: "/api/product",
      }),
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: "/api/product/delete-book",
        method: "PUT",
        body: bookId,
      }),
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetAllBookDataQuery,
  useDeleteBookMutation,
} = productApi;
