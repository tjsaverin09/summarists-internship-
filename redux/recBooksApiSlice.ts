import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Book {
  id: string;
  title: string;
  author: string;
  subTitle: string;
  imageLink: string;
  averageRating: string;
}

export const recBooksApi = createApi({
  reducerPath: "recBooksApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
  }),
  endpoints: (builder) => ({
    getRecBooks: builder.query<Book[], void>({
      query: () => ``,
    }),

    
  }),
});

export const { useGetRecBooksQuery } = recBooksApi;
