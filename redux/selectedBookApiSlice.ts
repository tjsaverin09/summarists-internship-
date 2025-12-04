import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const selectedBookApi = createApi({
  reducerPath: "selectedBookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://us-central1-summaristt.cloudfunctions.net/getBooks",
  }),
  endpoints: (builder) => ({
    getSingleBook: builder.query({
      query: () => {
        console.log("🚀 Making getSingleBook API call");
        return `?status=selected`;
      },
      // Force fresh data, no caching
      keepUnusedDataFor: 0,
      transformResponse: (response: any) => {
        console.log("✅ Raw API response:", response);
        console.log("📊 Response type:", typeof response);
        // If response is an array, return the first book
        // If response is an object, return it as-is
        const result = Array.isArray(response) ? response[0] : response;
        console.log("📦 Returning:", result);
        return result;
      },
      transformErrorResponse: (response: any) => {
        console.log("❌ API Error:", response);
        return response;
      },
    }),

    getBookById: builder.query({
      query: (bookId: string) => {
        console.log("🔍 Making getBookById API call with ID:", bookId);
        console.log("📡 Full URL will be:", `https://us-central1-summaristt.cloudfunctions.net/getBooks?id=${bookId}`);
        return `?id=${bookId}`;
      },
      keepUnusedDataFor: 0,
      transformResponse: (response: any) => {
        console.log("✅ Raw API response for book by ID:", response);
        console.log("📊 Response type:", typeof response);
        const result = Array.isArray(response) ? response[0] : response;
        console.log("📦 Returning from getBookById:", result);
        return result;
      },
      transformErrorResponse: (response: any) => {
        console.log("❌ getBookById API Error:", response);
        return response;
      },
    }),
  }),
});

export const { useGetSingleBookQuery, useGetBookByIdQuery } = selectedBookApi;
