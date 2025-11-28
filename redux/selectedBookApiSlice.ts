import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const selectedBookApi = createApi({
    reducerPath: 'selectedBookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected' }),
    endpoints: (builder) => ({
        getSingleBook: builder.query({
            query: () => ``
        })
    })
})

export const { useGetSingleBookQuery } = selectedBookApi