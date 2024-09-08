import { baseApi } from "@/redux/api/baseApi";

const ProjectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkill: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSkillQuery } = ProjectApi;
