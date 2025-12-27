import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Book {
    id: string;
    title: string;
    summary: string;
    imageLink: string;
    author: string;
}

export const allBooksApi = createApi({
    reducerPath: "allBooksApi",
    baseQuery: fetchBaseQuery({
        baseUrl:
        `https://us-central1-summaristt.cloudfunctions.net/getBooks`,
    }),
    endpoints: (builder) => ({
        getBooks: builder.query<Book[], void>({
            query: () => ``,
        }),
    }),
});

export const { useGetBooksQuery } = allBooksApi;