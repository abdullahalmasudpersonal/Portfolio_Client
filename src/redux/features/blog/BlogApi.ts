import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../tagTypes";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blog/create-blog",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    getBlogs: builder.query({
      query: () => ({
        url: "/blog/all-blog",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    getSingleBlog: builder.query({
      query: (blogId) => ({
        url: `/blog/single-blog/${blogId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    updateBlog: builder.mutation({
      query: ({ formData: updateData, _id }) => ({
        url: `/blog/update-blog/${_id}`,
        method: "PATCH",
        body: updateData,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    updateBlogSerialNumber: builder.mutation({
      query: (blogs) => ({
        url: "blog/update-blog-serial-number",
        method: "PATCH",
        body: blogs,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/blog/delete-blog/${blogId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useUpdateBlogSerialNumberMutation,
  useDeleteBlogMutation,
} = blogApi;
