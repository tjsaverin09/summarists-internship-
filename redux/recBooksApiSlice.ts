import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recBooksApi = createApi({
  reducerPath: "recBooksApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
  }),
  endpoints: (builder) => ({
    getRecBooks: builder.query({
      query: () => ``,
    }),

    
  }),
});

export const { useGetRecBooksQuery } = recBooksApi;
