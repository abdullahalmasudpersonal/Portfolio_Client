import { baseApi } from "../../api/baseApi";

const BlogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
    getSingleBlog: builder.query({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "GET",
      }),
    }),
    createBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blogs/create-blog",
        method: "POST",
        body: blogData,
      }),
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useCreateBlogMutation,
} = BlogApi;
