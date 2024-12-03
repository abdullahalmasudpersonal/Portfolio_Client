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
        url: "/skills",
        method: "GET",
      }),
      providesTags: [tagTypes.skill],
    }),
    deleteSkill: builder.mutation({
      query: (skillId) => ({
        url: `/skills/${skillId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.skill],
    }),
  }),
});

export const {
  useCreateSkillMutation,
  useGetSkillsQuery,
  useDeleteSkillMutation,
} = SkillApis;
