import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Book {
  id: string;
  title: string;
  author: string;
  subTitle: string;
  imageLink: string;
  averageRating: string;
}

export const sugBooksApi = createApi({
    reducerPath:"sugBooksApi",
    baseQuery: fetchBaseQuery({
        baseUrl:
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    }),
    endpoints: (builder) => ({
        getSugBooks: builder.query<Book[], void>({
            query: () => ``,
        }),
    })
});

export const { useGetSugBooksQuery } = sugBooksApi;