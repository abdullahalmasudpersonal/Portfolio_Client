import { baseApi } from "../../api/baseApi";

const VisitorApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVisiotr: builder.mutation({
      query: (visitors) => ({
        url: "/visitors/create-visiotr",
        method: "POST",
        body: visitors,
      }),
    }),
  }),
});

export const { useCreateVisiotrMutation } = VisitorApis;
