import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../tagTypes";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (projectData) => ({
        url: "/projects/create-project",
        method: "POST",
        body: projectData,
      }),
      invalidatesTags: [tagTypes.project],
    }),
    getAllProject: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),
    getSingleProject: builder.query({
      query: (projectId) => ({
        url: `/projects/${projectId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),
    updateProject: builder.mutation({
      query: ({ formData: projectData, projectId }) => ({
        url: `/projects/update-project/${projectId}`,
        method: "PATCH",
        body: projectData,
      }),
      invalidatesTags: [tagTypes.project],
    }),
    updateProjectSerialNumber: builder.mutation({
      query: (projects) => ({
        url: `/projects/update-project-serial-number`,
        method: "PATCH",
        body: projects,
      }),
      invalidatesTags: [tagTypes.project],
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        return {
          url: `/projects/delete-project/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.project],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetAllProjectQuery,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
  useUpdateProjectSerialNumberMutation,
  useDeleteProjectMutation,
} = projectApi;
