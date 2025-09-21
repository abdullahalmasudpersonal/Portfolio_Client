import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../tagTypes";

const SkillApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSkill: builder.mutation({
      query: (skillData) => ({
        url: "/skills/create-skill",
        method: "POST",
        body: skillData,
      }),
      invalidatesTags: [tagTypes.skill],
    }),
    getSkills: builder.query({
      query: () => ({
        url: "/skills/all-skill",
        method: "GET",
      }),
      providesTags: [tagTypes.skill],
    }),
    getSingleSkill: builder.query({
      query: (id) => ({
        url: `/skills/single-skill/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.skill],
    }),
    updateSkill: builder.mutation({
      query: ({id,data }) => ({
        url: `/skills/update-skill/${id}`,
        method: "PATCH",
        body: data ,
      }),
    }),
    deleteSkill: builder.mutation({
      query: (skillId) => ({
        url: `/skills/${skillId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.skill],
    }),
    updateSkillSerialNumber: builder.mutation({
      query: (skills) => ({
        url: `/skills/update-skill-serial-number`,
        method: "PATCH",
        body: skills,
      }),
      invalidatesTags: [tagTypes.skill],
    }),
  }),
});

export const {
  useCreateSkillMutation,
  useGetSkillsQuery,
  useGetSingleSkillQuery,
  useUpdateSkillMutation,
  useDeleteSkillMutation,
  useUpdateSkillSerialNumberMutation,
} = SkillApis;
