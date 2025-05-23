import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPosts } from "../types/post.ts";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPosts[], void>({
      query: () => `posts/`,
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
