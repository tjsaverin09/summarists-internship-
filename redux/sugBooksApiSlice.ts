import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sugBooksApi = createApi({
    reducerPath:"sugBooksApi",
    baseQuery: fetchBaseQuery({
        baseUrl:
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    }),
    endpoints: (builder) => ({
        getSugBooks: builder.query({
            query: () => ``,
        }),
    })
});

export const { useGetSugBooksQuery } = sugBooksApi;