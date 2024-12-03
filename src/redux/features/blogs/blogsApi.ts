import { baseApi } from "../../api/baseApi";

const BlogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBlogsQuery } = BlogApi;
