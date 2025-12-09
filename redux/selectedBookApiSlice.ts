import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const selectedBookApi = createApi({
  reducerPath: "selectedBookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://us-central1-summaristt.cloudfunctions.net/getBooks",
  }),
  endpoints: (builder) => ({
    getSingleBook: builder.query({
      query: () => `?status=selected`,
      // Force fresh data, no caching
      keepUnusedDataFor: 0,
      transformResponse: (response: any) => {
        console.log("Raw API response:", response);
        // If response is an array, return the first book
        // If response is an object, return it as-is
        return Array.isArray(response) ? response[0] : response;
      },
    }),

    getBookById: builder.query({
      query: (bookId: string) => `?id=${bookId}`,
      keepUnusedDataFor: 0,
      transformResponse: (response: any) => {
        console.log("Raw API response for book by ID:", response);
        return Array.isArray(response) ? response[0] : response;
      },
    }),
  }),
});

export const { useGetSingleBookQuery, useGetBookByIdQuery } = selectedBookApi;
