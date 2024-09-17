import { baseApi } from "@/redux/api/baseApi";

const ProjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkill: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
      providesTags: ["skill"],
    }),

    createSkill: builder.mutation({
      query: (info) => ({
        url: "/skills/create-skill",
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["skill"],
    }),

    deleteSkill: builder.mutation({
      query: (id) => ({
        url: `/skills/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skill"],
    }),
  }),
});

export const { useGetSkillQuery, useCreateSkillMutation,useDeleteSkillMutation} = ProjectApi;
